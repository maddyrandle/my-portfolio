import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-blue-300 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-pink-300 text-xl font-bold cursive tracking-widest"
          >
            MR
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-blue-300 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-pink-300"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-300 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-pink-300"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-300 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-pink-300"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/maddyrandle"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/maddyrandle/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/maddyrandle"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
