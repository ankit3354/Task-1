import React from "react";
import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Header() {
  return (
    <div className="header-contaioner">
      <div className="header-wrapper">
        <div className="heading">
          <div className="back-btn">
            <h3>Back</h3>
          </div>
          <h1>Venues around you</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur. Aliquam dignissim mauris
            velit.
          </h3>
        </div>
        <div className="filter-box">
          <div className="serach-box">
            <IoSearchOutline className="search-icon" />
            <input type="text" placeholder={`Search`} />
          </div>

          <div className="filter-icon">
            <MdArrowBackIos />
            <button>Delhi</button>
            <button>Agra</button>
            <button>Mumbai</button>
            <button>Noida</button>
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
