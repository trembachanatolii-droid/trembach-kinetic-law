import "./steps.css";

const Checkmark = () => (
  <svg className="apple-checkmark" viewBox="0 0 16 16" fill="none">
    <path
      d="M13.5 4L6 11.5L2.5 8"
      stroke="#34c759"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThreeStepProcess = () => {
  return (
    <section className="apple-steps-section">
      <div className="apple-steps-container">
        <h2 className="apple-steps-headline">
          Steps to File a California Personal Injury Lawsuit
        </h2>
        
        <p className="apple-steps-subheadline">
          Our proven 3-step process makes getting justice in California simple and stress-free.{" "}
          <span className="apple-steps-free-text">
            100% FREE TO START - NO FEES UNLESS WE WIN
          </span>
        </p>

        <div className="apple-steps-grid">
          {/* Step 1 */}
          <div className="apple-step-card">
            <div className="apple-step-number">1</div>
            <h3 className="apple-step-title">
              Contact Our California Attorneys
              <span className="apple-free-badge">FREE</span>
            </h3>
            <p className="apple-step-description">
              Reach out to our experienced California personal injury team for a{" "}
              <strong>FREE</strong> consultation. We'll evaluate your case and explain your legal options under California law—with no obligation.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span><strong>FREE</strong> case evaluation by California personal injury lawyers</span>
              </li>
              <li>
                <Checkmark />
                <span>No upfront fees required under California law</span>
              </li>
              <li>
                <Checkmark />
                <span><strong>STRONG</strong> track record with California insurance companies</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="apple-step-card">
            <div className="apple-step-number">2</div>
            <h3 className="apple-step-title">
              We'll File Your California Claim
              <span className="apple-free-badge">FREE</span>
            </h3>
            <p className="apple-step-description">
              Once you hire us, we handle all California legal paperwork and communications at{" "}
              <strong>ZERO COST</strong> to you. We'll gather evidence, work with experts, and build a strong California personal injury case.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span>Expert handling of California statute of limitations</span>
              </li>
              <li>
                <Checkmark />
                <span><strong>ZERO</strong> upfront attorney fees—we pay all case costs</span>
              </li>
              <li>
                <Checkmark />
                <span>Direct negotiation with California insurance adjusters</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="apple-step-card">
            <div className="apple-step-number">3</div>
            <h3 className="apple-step-title">
              Get Maximum California Compensation
            </h3>
            <p className="apple-step-description">
              We fight for every dollar you deserve under California personal injury law. You pay{" "}
              <strong>NOTHING</strong> unless we win your case—our fee only comes from your settlement or court award.
            </p>
            <ul className="apple-step-features">
              <li>
                <Checkmark />
                <span>Proven results with California injury settlements</span>
              </li>
              <li>
                <Checkmark />
                <span>No win = <strong>NO FEE</strong> under our California contingency agreement</span>
              </li>
              <li>
                <Checkmark />
                <span>Maximum compensation for your California injuries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
