import React from "react";

const FAF = () => {
  return (
    <div className="faf">
      <div className="container">
        <h3>Facts &#38; Figures</h3>

        <div className="faf__stat-list">
          <div className="faf__stat-list__stat">
            <div className="faf__stat-list__stat__amount">15+</div>
            <div className="faf__stat-list__stat__description">CLIENTS</div>
          </div>
          <div className="faf__stat-list__stat faf__stat-list__stat--purple">
            <div className="faf__stat-list__stat__amount">1K</div>
            <div className="faf__stat-list__stat__description">AWARDS</div>
          </div>
          <div className="faf__stat-list__stat faf__stat-list__stat--greenish">
            <div className="faf__stat-list__stat__amount">10K</div>
            <div className="faf__stat-list__stat__description">PROJECTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAF;
