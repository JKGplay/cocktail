import logo from './logo.svg';
import './App.css';
import Drinks from './drinks.js';
import { useEffect, useState } from "react";

function App() {

  const [entered, setEntered] = useState("");
  const [drink, setDrink] = useState([]);

  

  const submit = (e) => {
    e.preventDefault();

    if (!e.target.inp.value.trim().length) {
      if (entered === "random") {
        getDrinks(entered);
      } else {
        setEntered("random");
      }
    } else {
      setEntered(e.target.inp.value);
    }
  }

  const getDrinks = async (entered) => {

    let url = "";

    if (entered.trim().length) {
      if (entered === "random") {
        url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
      } else {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${entered}`;
      }
    }


    const response = await fetch(url);

    const responseJSON = await response.json();

    if (responseJSON.drinks) {
      setDrink(responseJSON.drinks);
      // console.log(responseJSON.drinks);
    }
  }

  useEffect(() => {
     getDrinks(entered); 
    
    }, [entered]);

    /*
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [num3, setNum3] = useState(0);

useEffect(()=>{
setNum3(num3+1);

},[num2,num1])
    */

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submit}>
          <label htmlFor='inp'>Nazwa Drinku</label>
          <br />
          <input type='text' name='inp' id='inp' />
          <input type='submit' value='Szukaj' />
        </form>
        <Drinks drink={drink}></Drinks>
      </header>
    </div>
  );
}

export default App;
