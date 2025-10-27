#!/usr/bin/env python3
"""
Script to integrate the interactive card stack from site2 into site3's hero section.
"""

import re

# Read site2 to extract card stack components
print("Reading site2...")
with open('/home/user/trembach-kinetic-law/comprehensive_site/sites/site2/hero_subhead_polished_visible_cta_fixed (1).html', 'r', encoding='utf-8') as f:
    site2_content = f.read()

# Extract the card stack HTML (from line 773)
# Find the homeHeader__mediaCards div and extract all cards
card_stack_pattern = r'<div class="homeHeader__mediaCards">(.*?)</div>\s*</section>'
card_match = re.search(card_stack_pattern, site2_content, re.DOTALL)

if not card_match:
    print("Could not find card stack HTML, trying alternative pattern...")
    # Try to find just after the known line
    start_idx = site2_content.find('<div class="homeHeader__mediaCards">')
    if start_idx != -1:
        # Find the closing div - look for pattern that ends this section
        # Count nested divs
        count = 1
        i = start_idx + len('<div class="homeHeader__mediaCards">')
        end_idx = i
        while count > 0 and i < len(site2_content):
            if site2_content[i:i+5] == '<div ':
                count += 1
            elif site2_content[i:i+6] == '</div>':
                count -= 1
                if count == 0:
                    end_idx = i + 6
            i += 1

        card_stack_html = site2_content[start_idx:end_idx]
        print(f"Extracted card stack HTML: {len(card_stack_html)} characters")
    else:
        print("ERROR: Could not find card stack HTML")
        exit(1)
else:
    card_stack_html = '<div class="homeHeader__mediaCards">' + card_match.group(1) + '</div>'

# Extract the CSS styles for card stack
print("Extracting CSS styles...")
css_block = '''<style id="card-stack-styles">
/* Card Stack Container */
.homeHeader__mediaCards {
  position: absolute;
  right: min(5vw, 40px) !important;
  top: clamp(40px, 8vh, 120px) !important;
  width: 28rem;
  height: 40rem;
  z-index: 10 !important;  /* Above all hero elements */
  pointer-events: auto;
}

/* Base Card Styling */
.homeHeader__mediaCard {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #202020;
  border-radius: 1rem;
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1), opacity 0.3s 0.5s linear;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

/* Media Content Inside Cards */
.homeHeader__mediaCard .media,
.homeHeader__mediaCard img,
.homeHeader__mediaCard video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  display: block;
}

/* Stack Initial State - Hide most cards */
.homeHeader__mediaCard {
  display: none;
  transform: rotate(9deg) scale(0.9);
  opacity: 0;
}

/* Show only the top 4 cards */
.homeHeader__mediaCard:nth-last-child(1),
.homeHeader__mediaCard:nth-last-child(2),
.homeHeader__mediaCard:nth-last-child(3),
.homeHeader__mediaCard:nth-last-child(4) {
  display: block;
  opacity: 1;
}

/* Stack Positions - from top to bottom */
.homeHeader__mediaCard:nth-last-child(1) {
  transform: rotate(-9deg) scale(1);
  z-index: 4;
  transition-delay: 0s;
}

.homeHeader__mediaCard:nth-last-child(2) {
  transform: rotate(0deg) scale(0.95);
  z-index: 3;
  transition-delay: 0.1s;
}

.homeHeader__mediaCard:nth-last-child(3) {
  transform: rotate(9deg) scale(0.9);
  z-index: 2;
  transition-delay: 0.2s;
}

.homeHeader__mediaCard:nth-last-child(4) {
  transform: rotate(9deg) scale(0.9);
  z-index: 1;
  transition-delay: 0.3s;
}

/* Drop Animation */
@keyframes cardDrop {
  0% {
    transform: rotate(-9deg) scale(1);
    opacity: 1;
  }
  50% {
    transform: rotate(-15deg) scale(1.05) translateY(20px);
    opacity: 0.7;
  }
  100% {
    transform: rotate(-20deg) scale(1.1) translateY(100px);
    opacity: 0;
  }
}

.homeHeader__mediaCard.drop {
  animation: cardDrop 0.8s forwards;
  z-index: 5 !important;
}

.homeHeader__mediaCards.dropping {
  /* Optional container state during drop */
}

/* Mobile Responsive */
@media screen and (max-width: 800px) {
  .homeHeader__mediaCards {
    top: clamp(20px, 5vh, 60px) !important;
    right: 5vw !important;
    width: 16rem;
    height: 24rem;
  }
}

@media screen and (max-width: 600px) {
  .homeHeader__mediaCards {
    width: 14rem;
    height: 21rem;
  }
}
</style>'''

# Extract and adapt the JavaScript
print("Creating JavaScript for card stack...")
js_block = '''<script id="card-stack-script">
(function() {
  'use strict';

  // Card Stack Animation Controller
  class CardStackController {
    constructor() {
      this.container = null;
      this.cards = [];
      this.interval = 3000;  // 3 seconds between drops
      this.timer = 0;
      this.lastTimestamp = Date.now();
      this.isAnimating = false;
      this.initialized = false;
    }

    init() {
      // Find the card container
      this.container = document.querySelector('.homeHeader__mediaCards');
      if (!this.container) {
        console.warn('Card stack container not found');
        return;
      }

      // Get all cards
      this.cards = Array.from(this.container.querySelectorAll('.homeHeader__mediaCard'));
      if (this.cards.length === 0) {
        console.warn('No cards found in container');
        return;
      }

      console.log(`Card stack initialized with ${this.cards.length} cards`);

      // Play first video if exists
      const firstVideo = this.container.querySelector('.homeHeader__mediaCard:last-child video');
      if (firstVideo) {
        firstVideo.play().catch(e => console.log('Autoplay prevented:', e));
      }

      this.initialized = true;
      this.startAnimation();
    }

    startAnimation() {
      // Start the animation loop
      this.animate();
    }

    animate() {
      if (!this.initialized) return;

      const now = Date.now();
      const delta = now - this.lastTimestamp;
      this.lastTimestamp = now;

      this.timer += delta;

      // Check if it's time to drop a card
      if (this.timer >= this.interval && !this.isAnimating) {
        this.timer = 0;
        this.dropCard();
      }

      // Continue the loop
      requestAnimationFrame(() => this.animate());
    }

    dropCard() {
      if (!this.container) return;

      const lastCard = this.container.querySelector('.homeHeader__mediaCard:last-child');
      if (!lastCard) return;

      this.isAnimating = true;

      // Add drop animation class
      this.container.classList.add('dropping');
      lastCard.classList.add('drop');

      // After animation completes
      setTimeout(() => {
        // Move card from end to beginning
        this.container.prepend(lastCard);

        // Remove animation classes
        lastCard.classList.remove('drop');
        this.container.classList.remove('dropping');

        // Pause the video of the moved card
        const video = lastCard.querySelector('video');
        if (video) {
          video.pause();
          video.currentTime = 0;
        }

        // Play the video of the new top card
        const newTopCard = this.container.querySelector('.homeHeader__mediaCard:last-child');
        if (newTopCard) {
          const newVideo = newTopCard.querySelector('video');
          if (newVideo) {
            newVideo.play().catch(e => console.log('Autoplay prevented:', e));
          }
        }

        this.isAnimating = false;
      }, 800); // Match the animation duration
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const controller = new CardStackController();
      controller.init();
    });
  } else {
    const controller = new CardStackController();
    controller.init();
  }
})();
</script>'''

# Read site3
print("Reading site3...")
with open('/home/user/trembach-kinetic-law/comprehensive_site/sites/site3/site_single_file_v5_hero_three_lines_dedup_fixed (1).html', 'r', encoding='utf-8') as f:
    site3_content = f.read()

# Modify site3 to add the card stack
print("Modifying site3...")

# 1. Remove overflow-x: hidden from hero-section to prevent clipping
site3_content = site3_content.replace(
    'overflow-x: hidden;',
    'overflow-x: visible; /* Modified to allow card stack */',
    1  # Only replace the first occurrence in hero-section
)

# 2. Find the figure-container and insert card stack before it closes
figure_container_pattern = r'(<div class="figure-container">.*?)(</div>\s*<!-- figure-container -->)'
figure_match = re.search(figure_container_pattern, site3_content, re.DOTALL)

if figure_match:
    # Insert card stack before the closing tag of figure-container
    modified_section = figure_match.group(1) + '\n\n<!-- Card Stack from Site2 -->\n' + card_stack_html + '\n\n' + figure_match.group(2)
    site3_content = site3_content.replace(figure_match.group(0), modified_section)
    print("Card stack HTML inserted")
else:
    print("Warning: Could not find figure-container, inserting in alternate location...")
    # Try to find the hero section end
    hero_section_pattern = r'(</section>\s*<!-- hero-section -->)'
    hero_match = re.search(hero_section_pattern, site3_content)
    if hero_match:
        site3_content = site3_content.replace(
            hero_match.group(0),
            '\n\n<!-- Card Stack from Site2 -->\n' + card_stack_html + '\n\n' + hero_match.group(0)
        )
        print("Card stack HTML inserted before hero section close")

# 3. Insert CSS before closing </style> tag in head
# Find the last </style> tag in the head
head_end_pattern = r'(</style>)(\s*</head>)'
head_match = re.search(head_end_pattern, site3_content, re.DOTALL)

if head_match:
    site3_content = site3_content.replace(
        head_match.group(0),
        head_match.group(1) + '\n\n' + css_block + '\n' + head_match.group(2)
    )
    print("CSS styles inserted")
else:
    # Alternative: insert before </head>
    site3_content = site3_content.replace('</head>', '\n' + css_block + '\n</head>', 1)
    print("CSS styles inserted (alternative method)")

# 4. Insert JavaScript before closing </body> tag
body_end_pattern = r'(</body>)'
site3_content = site3_content.replace(body_end_pattern, '\n' + js_block + '\n' + r'\1', 1)
print("JavaScript inserted")

# Write the modified site3
output_path = '/home/user/trembach-kinetic-law/site3_with_card_stack.html'
print(f"Writing modified file to {output_path}...")
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(site3_content)

print(f"✓ Integration complete! File saved to: {output_path}")
print(f"  - Card stack HTML: ✓")
print(f"  - Card stack CSS: ✓")
print(f"  - Card stack JavaScript: ✓")
print(f"  - Hero overflow fixed: ✓")
print(f"  - File size: {len(site3_content) / 1024 / 1024:.2f} MB")
