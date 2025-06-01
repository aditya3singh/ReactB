import { useState } from "react"

export default function Onclickhandle() {
    const [name, setName] = useState(" ");
    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChange} />
            <h1>Name: {name}</h1>
            <button onClick={() => setName(" ")}>Clear</button>
        </div>
    )
}
