import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import PostC from "./components/PostC";
import Post from "./posts.js";
import PostCard from "./PostCard";

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

      <div className="create">
        <a>
          <i className="fa">
            <AiFillPlusCircle className="fa2" />
          </i>
          <PostCard />
        </a>
      </div>

    </div>
  );
}

export default main;
