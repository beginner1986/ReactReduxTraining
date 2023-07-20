import { useAppDispatch, useAppSelector } from "../store/configureStore"
import { decrement, increment } from "./counterSlice";

export default function Counter() {
    const dispatch = useAppDispatch();
    const {value} = useAppSelector(state => state.counter);

    return (
        <div id='counter'>
            <h1>{value}</h1>
            <div>
                <button onClick={() => dispatch(increment())} className='btn'>+</button>
                <button onClick={() => dispatch(decrement())} className='btn'>-</button>
            </div>
        </div>
    )
}