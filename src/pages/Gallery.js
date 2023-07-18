import React from "react";
import PlaceHolder from "../img/item-holder.png";

function Gallery() {
  return (
    <div
      id="gallery-page-body"
      className="flex flex-col items-center bg-offwhite text-offblack dark:bg-offblack dark:text-offwhite inset-0"
    >
      <nav className="">
        <div
          id="nav-bar"
          className="flex items-center px-[20px] lg:px-[30px] border-b border-opacity-30 border-gray-600 w-screen h-[65px]"
        >
          <div id="nav-left" className="w-full md:w-[186px]">
            <a id="homeLink" className="text-2xl hover:cursor-pointer">
              Atelier Dellcastle
            </a>
          </div>
          <div id="nav-center" className="hidden md:flex m-auto">
            <ul className="flex justify-center gap-10 lg:gap-14 text-md mt-1">
              <a
                className="border-b-2 mt py-[18px] border-opacity-0 border-b-offblack dark:border-b-offwhite hover:border-opacity-100 transition-colors duration-200 selected"
                href="#explore"
              >
                Explore
              </a>
              <a
                className="border-b-2 mt py-[18px] border-opacity-0 dark:border-opacity-0 border-b-offblack dark:border-b-offwhite hover:border-opacity-100 transition-colors duration-200"
                href="#boards"
              >
                Cutting Boards
              </a>
              <a
                className="border-b-2 mt py-[18px] border-opacity-0 dark:border-opacity-0 border-b-offblack dark:border-b-offwhite hover:border-opacity-100 transition-colors duration-200"
                href="#kumiko"
              >
                Kumiko
              </a>
              <a
                className="border-b-2 mt py-[18px] border-opacity-0 dark:border-opacity-0 border-b-offblack dark:border-b-offwhite hover:border-opacity-100 transition-colors duration-200"
                href="#boxes"
              >
                Boxes
              </a>
              <a
                className="border-b-2 mt py-[18px] border-opacity-0 dark:border-opacity-0 border-b-offblack dark:border-b-offwhite hover:border-opacity-100 transition-colors duration-200"
                href="#inlay"
              >
                Inlay
              </a>
            </ul>
          </div>
          <div id="nav-right" className="flex justify-end shrink lg:w-[186px]">
            <a
              id="nav-hamburger"
              className="flex items-center justify-center w-[30px] h-[30px] hover:cursor-pointer"
            >
              <i className="fa-solid fa-bars fa-lg text-offblack dark:text-offwhite" />
            </a>
          </div>
        </div>
        <div id="nav-drop-down">
          <div id="nav-expander" className="h-0" />
        </div>
      </nav>
      {/*main content*/}
      <div id="gallery-body" className="px-[20px] md:px-[40px] lg:px-[60px]">
        <div
          id="header"
          className="text-3xl bold mt-7 md:mt-14 text-center md:text-left"
        >
          Featured
        </div>
        <div
          id="content-body"
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1250px] mt-6 w-full gap-4 md:gap-6"
        >
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
          <div className="item">
            <img className="item-img w-full" src={`${PlaceHolder}`} alt="" />
            <h2 className="item-name">Item Name Here</h2>
            <h6 className="item-type">Item Type</h6>
          </div>
        </div>
      </div>
      {/*footer*/}
      <footer className="h-[100px]">
        {/*To be implemented with legal when shopify is added*/}
      </footer>
    </div>
  );
}

export default Gallery;
