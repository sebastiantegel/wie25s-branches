import type { Planet } from "./models/Planet";
import "./style.css";

const planets: Planet[] = [
  {
    name: "Mercury",
    distanceFromSun: 0.3,
    rotationTime: 9,
    isHabitable: false,
  },
  {
    name: "Venus",
    distanceFromSun: 0.5,
    rotationTime: 18,
    isHabitable: false,
  },
  {
    name: "Tellus",
    distanceFromSun: 1,
    rotationTime: 24,
    isHabitable: true,
  },
];

planets.forEach((planet) => {
  const planetContainer = document.createElement("div");
  const name = document.createElement("h2");
  const distance = document.createElement("p");
  const isHabitable = document.createElement("input");

  name.innerHTML = planet.name;
  distance.innerHTML = planet.distanceFromSun.toString();
  isHabitable.type = "checkbox";
  isHabitable.checked = planet.isHabitable;
  isHabitable.disabled = true;

  planetContainer.appendChild(name);
  planetContainer.appendChild(distance);
  planetContainer.appendChild(isHabitable);
  document.getElementById("planets")?.appendChild(planetContainer);
});
