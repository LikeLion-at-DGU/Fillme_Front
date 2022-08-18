import { useEffect, useState } from "react";

import React from "react";
function Fill_feelings({
    id,
    user_id,
    image,
    persona,
    title,
    body,
    date_time,
    personaimage,
    video,
}) {
    //personaimage 추가해야함
    const [hover, setHover] = useState(false);
    const OnmouseEnter = () => {
        setHover(true);
    };
    const OnmouseLeave = () => {
        setHover(false);
    };
    useEffect(() => {
        // console.log("hover change");
    }, [hover]);

    const image_style = {
        backgroundImage: `url(http://127.0.0.1:8000${image})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    const persona_image = {};
    if (hover) {
        return (
            <div
                className="feelings"
                id={"feelings" + id}
                style={video === null ? image_style : null}
                onMouseLeave={OnmouseLeave}
            >
                {/* {image === null ? (
                    <video src={`http://127.0.0.1:8000${video}`} type="video/mp4">
                        대체 텍스트
                    </video>
                ) : null} */}
                <section id="user_id">@{user_id}</section>
                <div className="feelings_content2">
                    <section id="feed_persona">{persona}</section>
                    <section id="feed_title">{title}</section>
                    <p id="feed_body">{body}</p>
                    <img src={`http://127.0.0.1:8000${personaimage}`} id="feed_image" />
                    <section id="feed_date_time">{date_time.slice(0, 10)}</section>
                    <button id="btn">자세히 보기</button>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="feelings"
                id={"feelings" + id}
                style={video === null ? image_style : null}
                onMouseEnter={OnmouseEnter}
            >
                {/* {image === null ? (
                    <video src={`http://127.0.0.1:8000${video}`} type="video/mp4">
                        대체 텍스트
                    </video>
                ) : null} */}

                <section id="user_id">@{user_id}</section>
                <div className="feelings_content">
                    <section id="feed_persona">{persona}</section>
                    <section id="feed_title">{title}</section>
                    <img src={`http://127.0.0.1:8000${personaimage}`} id="feed_image" />
                    <section id="feed_date_time">{date_time.slice(0, 10)}</section>
                    <button id="btn">자세히 보기</button>
                </div>
            </div>
        );
    }
}
export default Fill_feelings;
