import React from "react";
import "./chat.scss";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { Images } from "./logo";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineGif } from "react-icons/ai";
import { BiLike } from "react-icons/bi";



function chat() {
  const user = {
    name: "User",
    imageUrl: Images.logo,
    imThur: Images.Thur,
    imout: Images.out,
    imageSize: 90,
  };
  return (
    <div className="chat">
      <div className="c">
      <Link to="/main" className="logo link">EDL</Link>
        <input type="text" className="search" placeholder="Search" />

        <Link to="/" className="link">
          <GoSearch className="icon-S" />
        </Link>
        
        <Link to="/main" className="link">
          <AiOutlineClose className="icon-Ex" />
        </Link>

        <hr className="hrs"/>

        <div className="border"></div>
        <img className="user" src={user.imageUrl} />
        <h3 className="N-user">Annie</h3>
        <img className="users" src={user.imageUrl} />
        <h3 className="N-users">Annie</h3>
        <img className="userse" src={user.imageUrl} />
        <h1 className="name">Annie</h1>
        <hr className="hr" />
        <AiOutlinePlusCircle className="icon-Cre" />
        <AiOutlinePicture className="icon-P" />
        <AiOutlineGif className="icon-GIF" />
        <input type="text" className="mes" placeholder="Aa" />
        <BiLike className="icon-L" />
        <h3 className="m">
          Typically replies within an hour 213
        </h3>
        <h3 className="mm">
        คนถูกใจสิ่งนี้ ร้านขายของชำ
        </h3>
      </div>
    </div>
  );
}

export default chat;
