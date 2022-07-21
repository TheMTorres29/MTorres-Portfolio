import React from "react";

const SmashInfo = () => {
  return (
    <div id="smash-bros-page" className="smash-info-wrapper">
      <div className="smash-info-container">        
        <div className="smash-records">
          <h1 className="smash-match-title">Smash Records / Matches</h1>

            <div className="smash-link-container">
              <h3>GameLab-Smash Jabroni Jamboree: Piston (Roy) Vs MTorres (Banjo)</h3>
            </div>

            <div className="smash-video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xVsCC1g1jQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br></br><br></br><h3>more coming soon</h3>
        </div>
      </div>
    </div>
  )
}

export default SmashInfo;