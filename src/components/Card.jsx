import React from "react";
import "./Card.css";

function Card() {
  const Items = [
    {
      id: 1,
      Image: "/assets/1.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 2,
      Image: "/assets/2.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 3,
      Image: "/assets/3.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 4,
      Image: "/assets/1.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 5,
      Image: "/assets/2.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 6,
      Image: "/assets/3.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 7,
      Image: "/assets/1.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 8,
      Image: "/assets/2.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
    {
      id: 9,
      Image: "/assets/3.png",
      title: "Open Bar & Lounge",
      location: "South Park, Delhi",
    },
  ];
  return (
    <div className="card-contanier">
      {Items.map((item) => (
        <div key={item.id} className="item-wrapper">
          <img src={item.Image} alt="image" className="item-image" />
          <p className="item-title">{item.title}</p>
          <p className="item-location">{item.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
