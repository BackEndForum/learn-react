
import './App.css'

const arry = [1, 2, "ali", "html", "css", "js"];

const [one, two, ...thr] = arry

const testObj = {name: "one", age: "two", last: "test", car: "BMW"};

const listObj = {color: "red", model: "2022"};

const mexed = {...listObj, ...testObj};

console.log(mexed);


function App() {

  return <div>
    <p>this is first element {one}</p>
    <p>this is second element {two}</p>
    <p>and this is last element {thr}</p>
    <mark>this is object {mexed.name}</mark>
  </div>
}

export default App
