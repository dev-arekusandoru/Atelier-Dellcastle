import React from "react";
import background from "../img/homepage2.jpg";

function Home() {
  return (
    <div
      id="home-page-body"
      style={{ backgroundImage: `url(${background})` }}
      /* onLoad=decideAnimationOnLoad('home-page-body', 'index.html', 'slideHomeInThroughTop', 'home-page-body-animation-in') */
      className="hidde flex-col justify-between items-center bg-offblack dark:bg-offblack bg-home bg-no-repeat bg-cover h-screen py-[20px] sd:py-[30px] text-offwhite inset-0"
    >
      <div className="uppercase text-lg sl:text-3xl font-bold mb-5 sd:mb-0 select-none">
        Welcome
      </div>
      <div className="flex flex-col items-center w-11/12">
        <h1 className="text-5xl sl:text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center uppercase font-bold mb-2 sd:mb-6 select-none">
          Atelier Dellcastle
        </h1>
        <div className="mb-7 sl:mb-11 sd:mb-14 text-lg sl:text-xl sd:text-2xl select-none">
          Fine Woodworking
        </div>
        <ul
          id="menu"
          className="flex flex-col md:flex-row gap-1 sd:gap-2 md:gap-7 items-center text-xl select-none"
        >
          <a className="home-menu-button px-2 py-1">About</a>
          <a className="home-menu-button px-2 py-1">Gallery</a>
          <a className="home-menu-button px-2 py-1">Shows</a>
          <a className="home-menu-button px-2 py-1">Contact</a>
        </ul>
      </div>
      <div id="socials" className="flex gap-3 mt-2 sl:mt-0">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100064173396873"
          className="flex justify-center items-center w-[30px] h-[30px] sl:w-[35px] sl:h-[35px] bg-offwhite rounded-2xl"
        >
          <i className="fa-brands fa-facebook-f fa-lg text-offblack" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/atelier_dellcastle/"
          className="flex justify-center items-center w-[30px] h-[30px] sl:w-[35px] sl:h-[35px] bg-offwhite rounded-2xl"
        >
          <i className="fa-brands fa-instagram fa-lg text-offblack" />
        </a>
        <a
          target="_blank"
          href="mailto:atelier.dellcastle@gmail.com"
          className="flex justify-center items-center w-[30px] h-[30px] sl:w-[35px] sl:h-[35px] bg-offwhite rounded-2xl"
        >
          <i className="fa-solid fa-envelope fa-lg text-offblack" />
        </a>
      </div>
    </div>
  );
}

export default Home;
