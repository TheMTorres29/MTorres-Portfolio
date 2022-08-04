import React from "react";
import { Card } from "react-bootstrap";

function ProjectCard() {
    const cardInfo = [
        { image: "https://lh4.googleusercontent.com/tXHtHfiekw1Zj5WxRywWpWMlj11NzxV3CCTf5ylO9Riqav0TroB68rdbxt-AODEgFfw=w2400", title: "JavaScript Practice", text: "JavaScript Challenges I found online and completed while I was learning. Shown off with React framework", link: "https://master.d13fxmao9cfi70.amplifyapp.com/" },
        { image: "https://lh5.googleusercontent.com/cV7MEw8tzDxbdmlIzYwQ6hZtj_duuPk-AtFc72YkAUyx-3kBPMYrjyJUZnBiNsdfMSM=w2400", title: "GraphQL Rick and Morty", text: "Used to learn how to pull data from an API using GraphQL. Made with React framework", link: "https://master.d24hyvuf8yk1ex.amplifyapp.com/" },
        { image: "https://lh3.googleusercontent.com/JzBjag4OSpUkytP905uL49kfHcHQ0YbvNnVMyDmMWJICba3Xes8YvvtgV378x_KIe5Y=w2400", title: "Tropa Magica Jump v.5", text: "Video Game Design class project made in Unity inspired by the band Tropa Magica. High score survival game! (PC Download)", link: "https://github.com/TheMTorres29/TropaMagicaGameBuild" },
        { image: "https://lh5.googleusercontent.com/L8xu3XVY6x6gnmrUoug7Bmcnzf7Ea5sTkuT6GE8L3KHKmN5jOtuRMQ0LjkJH6Cl9uDE=w2400", title: "Advanced Operating Systems Project", text: "Advanced Operating Systems class project using C++ to display memory storage dynamically changing (PC Download)", link: "https://github.com/TheMTorres29/CSE-4610-Project" },
    ]

    const renderCard = (card, index) => {
        return(
            <Card key={index} className="card-box">
                <Card.Img variant="top" src={card.image}alt={"preview could not load :("} className="card-image"/>
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{card.title}</Card.Title>
                    <Card.Text className="card-text">{card.text}</Card.Text>
                    <Card.Link className="card-link"> <a href={card.link}>View Project</a></Card.Link>
                </Card.Body>
            </Card>
        )
    }

  return (
    <div>
        <div className="portfolio-container">
            <h1>My Portfolio</h1>
            <div className="card-wrapper">
                {cardInfo.map(renderCard)}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard