export default function Fulist() {
    const fruits = [
        {id: 1, name: "apple", calories: 95},
        {id: 2, name: "banana", calories: 105},
        {id: 3, name: "orange", calories: 62},
        {id: 4, name: "grapes", calories: 67},
        {id: 5, name: "pineapple", calories: 50},
        {id: 6, name: "mango", calories: 60},
        {id: 9, name: "peach", calories: 59}
    ];
    // fruits.sort((a, b) => a.calories - b.calories); 
    // fruits.sort((a, b) => b.calories - a.calories); reverse order
    fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort by name
    fruits.sort((a, b) => b.name.localeCompare(a.name)); // sort by name

    const lowCalorieFruits = fruits.filter(fruit => fruit.calories > 60);

   const listItems = lowCalorieFruits.map(fruit => <li key = {fruit.id}>
                                                    {fruit.name}: &nbsp;
                                                   <b> {fruit.calories} </b></li>);



   return ((<ol>{listItems}</ol>))

}