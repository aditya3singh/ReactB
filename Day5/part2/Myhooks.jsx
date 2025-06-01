import React, {use, useState} from "react";

export default function Myhooks(){
    let [name, setName] = useState("Jordan");
    let [age ,setAge] = useState(0);
    let [isEmployed, setisEmployed] = useState(false);

    const updateName = () => {
        setName("Aditya");
        console.log("Name updated to Aditya ");   
    }

    const updateAge = () => {
        setAge(age + 1);
        console.log(`Age updated to  + ${age + 1}`); 
    }

    const toggleEmployment = () => {
        setisEmployed(!isEmployed);
        console.log(`Employment status updated to ${!isEmployed}`); 
    }
    

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}> Update Age</button>

            <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployment}> Toggled</button>
        </div>
    )
    
}