import React from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-row gap-4 bg-zinc-800 text-white p-4 justify-center items-center">
      <div className="flex flex-col gap-4">
        Footer Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        quam maxime pariatur incidunt quo quos quas, deleniti labore iusto
        dolorum sed molestias, ipsum explicabo nobis vitae sapiente sequi
        tenetur dolores. Assumenda recusandae dolores, officiis sint amet
        nostrum, sequi repellat dicta error doloremque rerum magnam ut, hic
        architecto dolor inventore odio. Consequatur odit accusamus cupiditate
        praesentium rerum fugiat fugit voluptatibus perferendis. Voluptatibus
        cupiditate veritatis vero dolorem deserunt blanditiis commodi. Rerum
        nesciunt porro harum necessitatibus ea doloribus illo nobis molestias.
        Cumque, quo illo ullam quia veniam a perferendis impedit corporis nulla
        natus.
      </div>
      <div className="flex flex-col gap-4"></div>
      <div className="flex gap-4">
        <NavLink to="/">
          <Icon icon="mdi:facebook" />
        </NavLink>
        <NavLink to="/">
          <Icon icon="mdi:instagram" />
        </NavLink>
        <NavLink to="/">
          <Icon icon="mdi:twitter" />
        </NavLink>
      </div>
    </footer>
  );
};
