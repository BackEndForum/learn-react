
import './App.css'
import data from "./assets/MOCK_DATA.json";
const langs = ["html","css","js","react"];
const list = data;

const fruitlist = ['apple', 'banana', 'cherry'];


function App() {

  return (
    <div className='App'>
      <h2>welcome mustafa</h2>
      <ul>
        {langs.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>first name</th>
            <th>gender</th>
            <th>e-mail</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>

          {list.map(val => <tr key={val.id}><td >{val.id}</td><td>{val.first_name + " " + val.last_name}</td><td>{val.gender}</td><td>{val.email}</td><td>{val.phone}</td></tr>)}
        </tbody>
      </table>
      <ul>
      {fruitlist.map((fruit, index, array) => {
        return (
          <li key={fruit}>
            Number: {fruit}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
    </div>
  )
}

export default App
