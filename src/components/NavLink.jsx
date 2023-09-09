import React from "react";

export default function NavLink({ title, link }) {

  return (
    <a
      href={link}
      className={`text-xl text-slate-900 font-normal hover:text-blue-400 dark:text-gray-200`}
    >
      {title}
    </a>
  );
}
