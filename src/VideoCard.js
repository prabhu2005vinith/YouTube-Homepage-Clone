import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelimage }) {
    return (
        <div className="videoCard">
            <img className="thumbnail"src={image} alt="" />
            <div className="videodescription">
                <Avatar className="avatar" src={channelimage} alt="" />
                <div className="video__details">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
