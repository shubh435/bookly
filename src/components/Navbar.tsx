import React from "react";

const navbarData = [
  {
    id: 1,
    name: "book",
    path: "/",
    iconName: "fa-heart",
  },
  {
    id: 2,
    name: "cart",
    path: "/cart",
    iconName: "fa-shopping-cart",
  },
  {
    id: 3,
    name: "user",
    path: "/user",
    iconName: "fa-user",
  },
];
const bottomNavbarData = [
  {
    id: 1,
    name: "home",
    path: "/",
    iconName: "fa-home",
  },
  {
    id: 2,
    name: "list",
    path: "/",
    iconName: "fa-list",
  },
  {
    id: 3,
    name: "tags",
    path: "/tags",
    iconName: "fa-tags",
  },
  {
    id: 4,
    name: "comments",
    path: "/comments",
    iconName: "fa-comments",
  },
  {
    id: 5,
    name: "blogs",
    path: "/blogs",
    iconName: "fa-blog",
  },
];

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header-1">
          <a href="/" className="logo">
            {" "}
            <i className="fas fa-book"></i> bookly{" "}
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              name=""
              placeholder="search here..."
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            {navbarData.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={`fas ${item.iconName}`}
              ></a>
            ))}
          </div>
        </div>
      </header>
      <nav className="bottom-navbar">
        {bottomNavbarData.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className={`fas ${item.iconName}`}
          ></a>
        ))}
      </nav>

    </>
  );
}

export default Navbar;
