import React from "react";
import image from "../coming-soon.jpeg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Open door"
        className="absolute object-cover w-full h=full"
      />
    </main>
  );
}
