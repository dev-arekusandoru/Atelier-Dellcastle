import React from "react";

function GalleryNavButton({ text, selected }) {
  return (
    <a
      className={` ${
        selected ? "selected" : ""
      } border-b-2 mt py-[17.5px] border-opacity-0 border-b-offblack dark:border-b-offwhite hover:border-opacity-100 transition-colors duration-200 `}
      href={`#${text}`}
    >
      {text}
    </a>
  );
}

function Nav({ isGallery, expanded }) {
  return (
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
        <div id="nav-center" className={`hidden md:flex m-auto`}>
          <ul
            className={`${
              isGallery ? "flex" : "hidden"
            } justify-center gap-10 lg:gap-14 text-md mt-1`}
          >
            <GalleryNavButton text="Explore" selected></GalleryNavButton>
            <GalleryNavButton text="Cutting Boards"></GalleryNavButton>
            <GalleryNavButton text="Kumiko" selected={false}></GalleryNavButton>
            <GalleryNavButton text="Boxes"></GalleryNavButton>
            <GalleryNavButton text="Inlay"></GalleryNavButton>
          </ul>
        </div>
        <div id="nav-right" className="flex justify-end shrink lg:w-[186px]">
          <a
            id="nav-hamburger"
            onClick={() => {
              console.log("click" + expanded);
              expanded = !expanded;
            }}
            className="flex items-center justify-center w-[30px] h-[30px] hover:cursor-pointer"
          >
            <i className="fa-solid fa-bars fa-lg text-offblack dark:text-offwhite" />
          </a>
        </div>
      </div>
      <div id="nav-drop-down">
        <div
          id="nav-expander"
          className={`h-0 bg-slate-200  ${expanded ? "expanded" : ""}`}
        />
      </div>
    </nav>
  );
}

export default Nav;
