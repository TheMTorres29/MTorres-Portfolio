import React from "react";

const SmashInfo = () => {
  return (
    <div id="smash-bros-page" className="smash-info-wrapper">
      <div className="smash-info-container">        
        <div className="smash-records">
          <h1 className="smash-match-title">Smash Records / Matches</h1>

            <div className="smash-video-container">
            <h3>GameLab-Smash Jabroni Jamboree: Piston (Roy) Vs MTorres (Banjo)</h3>
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xVsCC1g1jQA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>

            <div className="smash-video-container">
              <h3>It's Time to Duel #18 Yan (Jigglypuff) vs MTorres29 (Banjo)</h3>
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8fVxU3cHGdw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>

            <div className="smash-video-container">
              <h3>JV3 2022 Crew battle Los Lecheros vs SuperJellyNovaGang</h3>
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dIGwlR1oERA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>

            <h3 className="smash-coming-soon">more coming soon</h3>
        </div>
      </div>
    </div>
  )
}

export default SmashInfo;