import { useState, useEffect } from "react";
// import dummy from "../data.json"
import styled from "styled-components";
import axios from "axios";

function Mainprofile({ image, color, user, username, fullname, memo }) {
    // const [user, setUser] = useState();
    // const [username, setUserName] = useState();
    // const [fullname, setfullname] = useState();
    // const [memo, setmemo] = useState();
    // const [image, setimage] = useState();
    // const [color, setcolor] = useState();
    // const [persona_data, setPersona_data] = useState();
    // const local_main_data = JSON.parse(localStorage.getItem("local_main_data"));

    const feelings_style = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    };

    const Color = styled.div`
         {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.01) 4%, ${color} 15%);
        }
    `;

    return (
        <div className="card" id={"discover" + user}>
            <div className="image" style={feelings_style}>
                <p id="user_id">@{username}</p>
            </div>
            <Color className="user_data" id={"data" + user}>
                <p id="name">{fullname}</p>
                <p id="intro">{memo}</p>
                <button id="btn_profile">프로필 보기</button>
                <button id="btn_following">팔로잉</button>
            </Color>
        </div>
    );
}
export default Mainprofile;
