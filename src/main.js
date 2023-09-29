import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import PostC from "./components/PostC";
import Post from "./post.js";


function main() {
  return (
   
        <div className="body">
          
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

            <li>
              <a href="#">
                <i className="fa fa-2x">
                  <AiFillPlusCircle />
                </i>
                <span className="nav-text">
                  <PostC />
                </span>
              </a>
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
        <input type="text" className="search" placeholder="Search" />
        <GoSearch className="icon-S" />
        <Post />
        </div>
  );
}

export default main;
