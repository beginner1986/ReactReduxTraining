import { useState } from "react"

export default function Counter() {
    const [value, setValue] = useState(0);

    const increment = () => { setValue(value + 1) };
    const decrement = () => { setValue(value - 1) };

    return (
        <div id='counter'>
            <h1>{value}</h1>
            <div>
                <button onClick={increment} className='btn'>+</button>
                <button onClick={decrement} className='btn'>-</button>
            </div>
        </div>
    )
}