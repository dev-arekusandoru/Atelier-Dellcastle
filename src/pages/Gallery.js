import React from "react";
import Nav from "../elements/Nav";
import PlaceHolder from "../img/item-holder.png";

function Gallery() {
  return (
    <div
      id="gallery-page-body"
      className="flex flex-col items-center bg-offwhite text-offblack dark:bg-offblack dark:text-offwhite inset-0"
    >
      <Nav isGallery={true}></Nav>
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
