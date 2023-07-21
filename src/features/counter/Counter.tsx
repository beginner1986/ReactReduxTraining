import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function Counter() {
    const dispatch = useAppDispatch();
    const {value} = useAppSelector(state => state.counter);

    return (
        <div id='counter'>
            <h1>{value}</h1>
            <div>
                <button onClick={() => dispatch(decrement(2))} className='btn'>-2</button>
                <button onClick={() => dispatch(decrement(1))} className='btn'>-</button>
                <button onClick={() => dispatch(increment(1))} className='btn'>+</button>
                <button onClick={() => dispatch(increment(2))} className='btn'>+2</button>
            </div>
        </div>
    )
}