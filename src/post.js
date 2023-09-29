import React from "react";
import "./post.scss";
import { Images } from "./logo";
// import { BiWorld } from "react-icons/bi";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { MdCancel } from "react-icons/md";
// import { AiOutlinePicture } from "react-icons/ai";
// import { BsEmojiSmile } from "react-icons/bs";


function post() {
  const user = {
    name: "User",
    imageUrl: Images.logo,
    imThur: Images.Thur,
    imout: Images.out,
    imageSize: 90,
  };
  return (
    // <div>
    //   <div className="post">
    //     <h1>Create Post</h1>
    //     <h2 className="cancel"><MdCancel/></h2>
    //     <img src={user.imageUrl} className="logo" />
    //     <h2>{user.name}</h2>
    //     <h3 className="world">
    //       <BiWorld />
    //     </h3>
    //     <h4 className="h4">Public</h4>
    //     <h3 className="arrow">
    //       <MdKeyboardArrowDown />
    //     </h3>
    //     <h3>
    //       "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
    //       consectetur, adipisci velit..." "There is no one who loves pain
    //       itself, who seeks after it and wants to have it, simply because it is
    //       pain..."
    //     </h3>
    //     <div className="pic">
    //         <h1 className="pic1"><AiOutlinePicture/></h1>
    //         <h2 className="addpic">Add Picture</h2>
    //     </div>
    //     <input type="text" placeholder="Add it to your post"/>
    //     <h2 className="pic2"><AiOutlinePicture/></h2>
    //     <h2 className="emo"><BsEmojiSmile/></h2>
    //   </div>
    // </div>
    <div className="box">

  <div className="album-name">
  
  </div>
  <hr/>

  <div className="parent-div">
    <div className="dp-img">
      <img src={user.imThur}
                 alt=""/>
      <div>
        <h4>Ahmudul Hossain</h4>
        <div className="date-ico">
          <p>February 27 &middot;</p>
          <svg color="#65676B" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm-1-2.05V18q-.825 0-1.413-.588T9 16v-1l-4.8-4.8q-.075.45-.138.9T4 12q0 3.025 1.988 5.3T11 19.95Zm6.9-2.55q.5-.55.9-1.188t.662-1.325q.263-.687.4-1.412T20 12q0-2.45-1.363-4.475T15 4.6V5q0 .825-.588 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.65 0 1.175.388T17.9 17.4Z" />
          </svg>
        </div>
      </div>
    </div>

    <div className="icon-back">
      <svg color="gray" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z" />
      </svg>
    </div>

  </div>

  <div className="cover">
    <img src={user.imageUrl} alt="" height="420px"/>
  </div>

  <div className="react">
    <svg color="#EF3756" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M9.75 7.82c.87 0 1.7.41 2.25 1.05c.55-.64 1.38-1.05 2.25-1.05c1.54 0 2.75 1.21 2.75 2.75c0 1.89-1.7 3.43-4.28 5.77L12 17l-.72-.66C8.7 14 7 12.46 7 10.57c0-1.54 1.21-2.75 2.75-2.75Z" />
    </svg>
    <p>Shoriful Islam and Mahmudul Hasan</p>
  </div>
  <hr/>

  <div className="bottom-icon">

    <div className="make-horizontal">
      <svg color="#6E757D" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256">
        <path fill="currentColor" d="M237 77.47A28 28 0 0 0 216 68h-52V56a44.05 44.05 0 0 0-44-44a12 12 0 0 0-10.73 6.63L72.58 92H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h172a28 28 0 0 0 27.78-24.53l12-96a28 28 0 0 0-6.78-22ZM36 116h32v80H36Zm184-19.5l-12 96a4 4 0 0 1-4 3.5H92v-89.17l34.82-69.63A20 20 0 0 1 140 56v24a12 12 0 0 0 12 12h64a4 4 0 0 1 4 4.5Z" />
      </svg>
      <p>Like</p>
    </div>

    <div className="make-horizontal">
      <svg color="#6E757D" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
        <path fill="currentColor" d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
      </svg>
      <p>Comment</p>
    </div>

  </div>
  <hr/>

  <div className="comment-sec">

    <img src={user.imThur} alt=""/>

    <div className="input-div">

      <input type="text" placeholder="Write a comment..."/>

      <div>
        <svg color="gray" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 18q2.075 0 3.538-1.462Q17 15.075 17 13q0-2.075-1.462-3.538Q14.075 8 12 8Q9.925 8 8.463 9.462Q7 10.925 7 13q0 2.075 1.463 3.538Q9.925 18 12 18Zm0-2q-1.25 0-2.125-.875T9 13q0-1.25.875-2.125T12 10q1.25 0 2.125.875T15 13q0 1.25-.875 2.125T12 16Zm6-6q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.7 3.325q.15-.15.337-.238Q9.225 3 9.425 3h5.15q.2 0 .388.087q.187.088.337.238L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Zm16-2V7h-4.05l-1.825-2h-4.25L8.05 7H4v12Zm-8-6Z" />
        </svg>

        <svg color="gray" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12Zm7.147 3.553a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.766 5.766 0 0 1 12 17.75a5.766 5.766 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049Z" clip-rule="evenodd" />
            <path d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5Zm-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5Z" />
          </g>
        </svg>

        <svg color="gray" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Zm3.5 9h1q.425 0 .713-.288T10.5 13v-.5q0-.2-.15-.35T10 12q-.2 0-.35.15t-.15.35v.5h-1v-2H10q.2 0 .35-.15t.15-.35q0-.2-.15-.35T10 10H8.5q-.425 0-.713.288T7.5 11v2q0 .425.288.713T8.5 14Zm3.5 0q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T12 10q-.2 0-.35.15t-.15.35v3q0 .2.15.35T12 14Zm2 0q.2 0 .35-.15t.15-.35v-1h1q.2 0 .35-.15T16 12q0-.2-.15-.35t-.35-.15h-1V11H16q.2 0 .35-.15t.15-.35q0-.2-.15-.35T16 10h-2q-.2 0-.35.15t-.15.35v3q0 .2.15.35T14 14Z" />
        </svg>

        <svg color="gray" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v6.879a2.25 2.25 0 0 1-.659 1.59l-5.621 5.622a2.25 2.25 0 0 1-1.591.659H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75H13v-3.064a6.657 6.657 0 0 1-.673.066L12 16.51a6.334 6.334 0 0 1-3.678-1.14a.75.75 0 1 1 .854-1.234c.844.584 1.78.874 2.824.874c.462 0 .903-.057 1.324-.171a3.247 3.247 0 0 1 2.713-1.832L16.25 13h3.25V6.25a1.75 1.75 0 0 0-1.75-1.75Zm.689 10h-2.188a1.75 1.75 0 0 0-1.744 1.607l-.006.143l-.001 2.189l3.939-3.939ZM9 7.751a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.5Zm6 0a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.499Z" />
        </svg>

      </div>
    </div>

  </div>

</div>
  );
}

export default post;
