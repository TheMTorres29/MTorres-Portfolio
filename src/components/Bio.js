import React from "react";
import profilepic from "../imgs/profilepic.png";

const Bio = () => {
  return (
    <div className='bio-container'>
        <div className='profile-pic-container'>
            <img className="profile-pic-img" src={profilepic}></img>
        </div>
        <div className="profile-bio-container">
            <h3>Miguel Torres</h3>
            <p>
                I am an aspiring Web Developer looking for a place where I can get the oportunity to learn and advance my skills
                in Software and Web Development everyday. Creating applications that people can use everyday is such a cool idea
                to me and is what drives me to practice and study how to make applications everyday. Anything new learned is a
                great acheivement for me.
                On my free time I enjoy watching YouTube videos on Web Development and playing Super Smash Bros. Ultimate for the 
                Nintendo Switch. I have been going to local tournaments lately to help improve my skills in this game as well. I 
                just need to throw myself into the pool and learn to swim, and I am doing just that by competing with players that 
                are better than me and learning from each experience I get. Each loss has something positive that can be taken 
                away from it. And I try to apply this to my Software Engineering/Web Development Journey!
            </p>
        </div>
    </div>
  )
}

export default Bio