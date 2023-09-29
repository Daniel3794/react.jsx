import React from 'react'
import "./create.scss";
import { Images } from "./logo";
import { BiWorld } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";


function create() {
    const user = {
        name: "User",
        imageUrl: Images.logo,
        imThur: Images.Thur,
        imout: Images.out,
        imageSize: 90,
      };
  return (
    <div className='post-card'>
      <div className="post">
        <h1>Create Post</h1>
        <h2 className="cancel"><MdCancel/></h2>
        <img src={user.imageUrl} className="logo" />
        <h2>{user.name}</h2>
        <h3 className="world">
          <BiWorld />
        </h3>
        <h4 className="h4">Public</h4>
        <h3 className="arrow">
          <MdKeyboardArrowDown />
        </h3>
        <h3 className='com'>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </h3>
        <div className="pic">
            <h1 className="pic1"><AiOutlinePicture/></h1>
            <h2 className="addpic">Add Picture</h2>
        </div>
        <input type="text" placeholder="Add it to your post"/>
        <h2 className="pic2"><AiOutlinePicture/></h2>
        <h2 className="emo"><BsEmojiSmile/></h2>
      </div>
    </div>
  )
}

export default create