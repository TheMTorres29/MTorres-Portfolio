import React from "react";
import timelineData from "../timelineData";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Timeline = () => timelineData.length > 0 && (
    <div className="timeline-wrapper">
        <h1>Timeline</h1>
        <div className="timeline-container">
            <VerticalTimeline>
                {
                    timelineData.map(element => {
                        
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={element.color}
                                icon={element.icon}
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p className="vertical-timeline-element-desc">{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>

    </div>
)

export default Timeline