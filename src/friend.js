import React from "react";
import "./friend.scss";
import { Link } from "react-router-dom";
import { Images } from "./logo";
import { GoSearch } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";



function friend() {
  const user = {
    name: "User",
    imageUrl: Images.logo,
    imThur: Images.Thur,
    imout: Images.out,
    imageSize: 90,
  };
  return (
    <div className="friend">
      <div className="f">
      
          <img className="usera" src={user.imageUrl} />
          
        
        <h3 className="list">Firend list</h3>
        <input type="text" className="search" placeholder="Search" />

        <GoSearch className="icon-S" />

        <nav className="main-menu">
        <ul>
      
            <li>
              <Link to="/main">
                <i className="fa fa-home fa-2x"></i>
                <span className="nav-text">Community Dashboard</span>
              </Link>
            </li>

            <li className="has-subnav">
              <Link to="/chat">
                <i className="fa fa-comments fa-2x"></i>
                <span className="nav-text">Group Hub Forums</span>
              </Link>
            </li>

            <li>
              <Link to="/friend">
                <i className="fa fa-2x">
                  <FaUserFriends />
                </i>
                <span className="nav-text">Member</span>
              </Link>
            </li>

           
          </ul>

          <ul className="logout">
            <li>
              <a href="#">
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <img className="user" src={user.imageUrl} />
          <h3 className="N-user">User</h3>
        </div>

      </div>
    </div>
  );
}

export default friend;
