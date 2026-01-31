function Car(props) {
  const txt = 
  <div>
    <h1>hello i'm {props.name} and i'm {props.age} y but in my age i already have my own {props.brand} model {props.model} and as you can see it's color is {props.color}</h1>
    <p>{props.names[0]}</p>
    <p>{props.names.map((k, i) => <span key={i}> hello {k}</span>)}</p>
    <br />
    <h2>{props.lang.php}</h2>
  </div>;

  return txt;
}
function Lass() {
  const listName = ["mustafa", "ahmed", "sara", "lina"];
  const lang = {html: "HTML", css: "CSS", js: "js", php: "PHP"};
  return <Car brand="BMW" color="blue" model="2022" name="Mustafa" age={22} names={listName} lang={lang} />;
}
export default Lass;