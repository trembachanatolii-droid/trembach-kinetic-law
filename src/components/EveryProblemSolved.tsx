import React, { useEffect, useRef } from 'react';

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const deck = sectionRef.current.querySelector('#deck') as HTMLElement;
    const cards = Array.from(deck.querySelectorAll('.card')) as HTMLElement[]; // order: top first
    const total = cards.length;

    let activeIndex = 0;      // which card is currently on top in center pile
    let doneCount = 0;        // how many have been moved right

    // Initialize depth & z-index so they look like one neat pile
    function layoutStack() {
      for (let i = 0; i < total; i++) {
        const card = cards[i];
        const depth = i < activeIndex ? 0 : (i - activeIndex); // behind active
        card.style.setProperty('--depth', depth.toString());
        card.style.removeProperty('--done-x');
        card.classList.remove('active','done');
        card.style.zIndex = String(30 - depth);
        card.style.opacity = '1';
      }
      if (activeIndex < total) {
        cards[activeIndex].classList.add('active');
        cards[activeIndex].setAttribute('aria-current', 'step');
      }
    }

    // Move the current active card slightly right and make the next one active
    function advance() {
      if (activeIndex >= total) return;
      const current = cards[activeIndex];
      // assign a small additional offset so done cards create a tidy staircase to the right
      const extra = (doneCount * 18) + 'px';
      current.style.setProperty('--done-x', extra);
      current.classList.remove('active');
      current.classList.add('done');
      current.removeAttribute('aria-current');

      doneCount++;
      activeIndex++;

      if (activeIndex < total) {
        // re-layout rest of stack with new active
        for (let i = activeIndex; i < total; i++) {
          const card = cards[i];
          const depth = i - activeIndex;
          card.style.setProperty('--depth', depth.toString());
          card.style.zIndex = String(30 - depth);
        }
        cards[activeIndex].classList.add('active');
        cards[activeIndex].setAttribute('aria-current', 'step');
      }
    }

    // (Optional) go back one step if needed
    function retreat() {
      if (activeIndex <= 0) return;
      activeIndex--;
      doneCount = Math.max(0, doneCount - 1);

      // the previously done card returns to center pile
      const returning = cards[activeIndex];
      returning.classList.remove('done');
      returning.classList.add('active');
      returning.setAttribute('aria-current', 'step');

      // fix depths for remaining behind cards
      for (let i = activeIndex; i < total; i++) {
        const card = cards[i];
        const depth = i - activeIndex;
        card.style.setProperty('--depth', depth.toString());
        card.style.zIndex = String(30 - depth);
      }
    }

    // Click = advance
    cards.forEach((card, i) => {
      const clickHandler = (e: Event) => {
        if (i === activeIndex) advance();
      };
      
      const keydownHandler = (e: KeyboardEvent) => {
        if (i === activeIndex && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          advance();
        }
      };

      card.addEventListener('click', clickHandler);
      card.addEventListener('keydown', keydownHandler);
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Problem #${card.dataset.step}`);

      // Cleanup function will be handled by useEffect cleanup
    });

    // Initialize
    layoutStack();

    // OPTIONAL: Up/Down arrows to retreat/advance
    const globalKeyHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') advance();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') retreat();
    };

    window.addEventListener('keydown', globalKeyHandler);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', globalKeyHandler);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Section */
        #eps { 
          min-height: 100vh; display: grid; place-items: center; 
          padding: 6rem 1rem; background: #0e0e0f; color:#fff; 
        }
        #eps h2 { font-size: clamp(1.6rem, 2vw + 1rem, 2.2rem); margin: 0 0 .5rem }
        #eps .sub { margin: 0 0 2rem; color:#c9c9c9 }

        /* Deck container */
        #deck {
          position: relative; 
          width: min(92vw, 520px); 
          height: 480px; 
          margin: 0 auto;
          perspective: 1200px;
        }

        /* Base card */
        .card {
          --depth: 0;               /* set by JS */
          --done-x: 0px;            /* set when clicked */
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          margin: auto;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%) 
                     translateY(calc(var(--depth) * 8px))
                     scale(calc(1 - var(--depth) * 0.03));
          border-radius: 18px;
          background: #161618;
          box-shadow: 0 12px 28px rgba(0,0,0,.45);
          padding: 28px 26px;
          transition: transform .38s cubic-bezier(.22,1,.36,1), 
                      box-shadow .28s ease, opacity .28s ease;
          will-change: transform;
          outline: none;
          cursor: pointer;
        }

        /* Active (top, centered) */
        .card.active {
          transform: translate(-50%, -50%) scale(1) translateZ(24px);
          box-shadow: 0 18px 40px rgba(0,0,0,.55);
          z-index: 50;
        }
        .card.active:focus-visible { box-shadow: 0 0 0 3px #4da3ff; }

        /* When a card is completed (clicked), nudge right and slightly down */
        .card.done {
          transform: translate(calc(-50% + 140px + var(--done-x)), -50%) 
                     scale(.96);
          z-index: 10;
        }

        /* Micro hover polish on desktop */
        @media (hover: hover) {
          .card.active:hover { transform: translate(-50%, -50%) scale(1.04) translateZ(30px); }
        }

        /* Content bits */
        .card h3 { margin: 0 0 .5rem; font-size: 1.1rem; color: #f0f0f0; letter-spacing: .3px; }
        .card .p { margin: .25rem 0 1rem; font-style: italic; color:#d9d9d9 }
        .card .s { margin: 0; color:#eaeaea }
        .cta { margin-top: 1.25rem; padding:.9rem 1.4rem; border:0; border-radius: 999px;
               background:#2b7cff; color:#fff; font-weight:600; cursor:pointer;
               transition: transform .2s ease, background .2s ease }
        .cta:hover { transform: scale(1.03); background:#1c68e6 }
      `}</style>
      
      <section ref={sectionRef} id="eps" aria-label="Every Problem Solved">
        <h2>Every Problem Solved</h2>
        <p className="sub">Here's how we eliminate every obstacle between you and maximum compensation</p>

        <div id="deck" role="list" aria-live="polite">
          {/* Top card is first in this HTML order */}
          <article className="card" role="group" aria-roledescription="Step" data-step="1">
            <h3>Problem #1</h3>
            <p className="p">"I don't know what my case is worth"</p>
            <p className="s"><strong>WE SOLVE THIS:</strong> Former defense attorney reveals exact formula insurance companies use to value cases (then we 10X it).</p>
          </article>

          <article className="card" role="group" aria-roledescription="Step" data-step="2">
            <h3>Problem #2</h3>
            <p className="p">"Insurance offered me pennies"</p>
            <p className="s"><strong>WE SOLVE THIS:</strong> We know their entire playbook. Average settlement increase: 347% above initial offer.</p>
          </article>

          <article className="card" role="group" aria-roledescription="Step" data-step="3">
            <h3>Problem #3</h3>
            <p className="p">"I can't afford a lawyer"</p>
            <p className="s"><strong>WE SOLVE THIS:</strong> $0 upfront. $0 unless we win. We even advance all case costs.</p>
          </article>

          <article className="card" role="group" aria-roledescription="Step" data-step="4">
            <h3>Problem #4</h3>
            <p className="p">"This will take forever"</p>
            <p className="s"><strong>WE SOLVE THIS:</strong> Most cases settle in 3–6 months using our insider negotiation tactics.</p>
          </article>

          <article className="card" role="group" aria-roledescription="Step" data-step="5">
            <h3>Problem #5</h3>
            <p className="p">"They're denying liability"</p>
            <p className="s"><strong>WE SOLVE THIS:</strong> We know every excuse they use and exactly how to destroy each one.</p>
          </article>

          <article className="card" role="group" aria-roledescription="Step" data-step="6">
            <h3>Problem #6</h3>
            <p className="p">"I'm overwhelmed"</p>
            <p className="s"><strong>WE SOLVE THIS:</strong> We handle 100% of everything. You focus on healing.</p>
            <button className="cta" type="button">Get My Free Case Review</button>
          </article>
        </div>
      </section>
    </>
  );
};

export default EveryProblemSolved;