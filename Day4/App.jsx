import CompleList from "./CompleList";
import Fulist from "./Fulist";

export default function App() {
  const fruits = [
        {id: 1, name: "apple", calories: 95},
        {id: 2, name: "banana", calories: 105},
        {id: 3, name: "orange", calories: 62},
        
    ];
  const vegitables = [
        {id: 4, name: "grapes", calories: 67},
        {id: 5, name: "pineapple", calories: 50},
        {id: 6, name: "mango", calories: 60}, 
        {id: 9, name: "peach", calories: 59}
    ];
  return (
    <>
    {/* <Fulist/> */}

    {fruits.length > 0 ? <CompleList items= {fruits} category= "Fruits"/>: null}
    {vegitables.length > 0 ? <CompleList items= {vegitables} category= "Vegitables"/> : null}
    </>
  );
}
