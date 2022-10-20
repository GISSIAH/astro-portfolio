import React from "react";

export default function NavLink({ title, link }) {

  return (
    <a
      href={link}
      className={`text-xl text-gray-900 font-normal hover:text-blue-400`}
    >
      {title}
    </a>
  );
}
