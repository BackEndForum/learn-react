
import './App.css'
const lang = ["html", "css", "js", "php"];

const [one, , thre, last] = lang;

const handel = function(confDate) {
  const d = confDate.getDate();
  const m = confDate.getMonth() + 1;
  const y = confDate.getFullYear();
  return [d, m, y];
}

const [day, month, year] = handel(new Date());

// const objTest = {name: "BMW", model: "2023", color: "white"};

const objTest = function(obj) {
  const x = obj.name;
  const y = obj.model;
  const z = obj.color;
  return {x, y, z}
}
const {y, z, x} = objTest({name: "BMW", model: "2024", color: "white"});

const testObj = objTest({name:"BYD", model: "2022", color: "black"});

function App() {

  return <div>
    <p>the first lang is {one}</p>
    <p>the second lang is </p>
    <p>the three lang is {thre}</p>
    <p>and the last lang is {last}</p>
    <br />
    <mark>today is {month} {day}, {year}</mark>
    <br />
    <ul>
      <li>the name is {testObj.x}</li>
      <li>the model is {testObj.y}</li>
      <li>the color is {testObj.z}</li>
    </ul>
    <br />
    <ul>
      <li>the name is {x}</li>
      <li>the model is {y}</li>
      <li>the color is {z}</li>
    </ul>
  </div>
}

export default App
