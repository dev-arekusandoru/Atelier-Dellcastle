import React from "react";

function Contact() {
  return (
    <div
      id="contact-page-body"
      className="flex min-h-screen flex-col items-center bg-offwhite text-offblack dark:bg-offblack dark:text-offwhite"
    >
      <nav className="">
        <div
          id="nav-bar"
          className="flex justify-between items-center px-[20px] md:px-[30px] border-b border-opacity-30 border-gray-600 w-screen h-[65px]"
        >
          <div id="nav-left" className="w-full md:w-[280px]">
            <a id="homeLink" className="text-2xl hover:cursor-pointer">
              Atelier Dellcastle
            </a>
          </div>
          <div id="nav-center" className="hidden md:flex" />
          <div
            id="nav-right"
            className="flex justify-end w-[60px] md:w-[280px]"
          >
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
      <div
        id="contact-body"
        className="flex flex-col items-center w-screen px-[20px] md:px-[40px] lg:px-[60px]"
      >
        <h2 className="uppercase my-10 text-5xl font-bold">Contact</h2>
        <form
          id="contact-form"
          action="https://formsubmit.co/a6eb358ea5db77e291c821076e3eab48npx create-react-app"
          method="POST"
          className="flex flex-col justify-center w-11/12 md:w-5/6 lg:w-2/3 max-w-[1000px] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="contact-div">
              <input
                className="contact-input"
                name="name"
                id="name"
                type="text"
                required=""
              />
              <label className="contact-label" htmlFor="name">
                <span className="contact-label-content">Name</span>
              </label>
            </div>
            <div className="contact-div mt-5 md:mt-0">
              <input
                className="contact-input"
                name="email"
                id="email"
                type="email"
                required=""
              />
              <label className="contact-label" htmlFor="email">
                <span className="contact-label-content">Email</span>
              </label>
            </div>
          </div>
          <div className="contact-div my-5">
            <input
              className="contact-input"
              name="subject"
              id="subject"
              type="text"
              required=""
            />
            <label className="contact-label" htmlFor="subject">
              <span className="contact-label-content">Subject</span>
            </label>
          </div>
          <div className="contact-div flex items-center gap-2">
            <div className="checkbox" id="commission-display">
              <div id="commission-display-inside-checkbox" />
              <input name="commission" id="commission" type="checkbox" />
            </div>
            <label htmlFor="commission" className="cursor-pointer select-none">
              Is this a commission?
            </label>
          </div>
          <div>
            <textarea
              name="contact-content"
              id="contact-content"
              className="h-[300px] my-5 p-3"
              placeholder="Start your message here..."
              required=""
              defaultValue={""}
            />
          </div>
          <div className="flex justify-between items-center">
            <input
              className="w-[130px] h-[50px] text-xl border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer hover transition-all"
              type="submit"
              name="Submit"
              id="submit"
            />
            <div id="socials" className="flex gap-3 mt-2 sl:mt-0">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100064173396873"
                className="flex justify-center items-center w-[30px] h-[30px] sl:w-[35px] sl:h-[35px] bg-offblack dark:bg-offwhite"
              >
                <i className="fa-brands fa-facebook-f fa-lg text-offwhite dark:text-offblack" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/atelier_dellcastle/"
                className="flex justify-center items-center w-[30px] h-[30px] sl:w-[35px] sl:h-[35px] bg-offblack dark:bg-offwhite"
              >
                <i className="fa-brands fa-instagram fa-lg text-offwhite dark:text-offblack" />
              </a>
            </div>
          </div>
        </form>
      </div>
      {/*footer*/}
      <footer className="h-[100px]">
        {/*To be implemented with legal when shopify is added*/}
      </footer>
    </div>
  );
}

export default Contact;
