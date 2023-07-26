import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { counterAsyncUpdate, decrementAsync, incrementAsync } from "./aysncCounterSlice"

export default function AsyncCounter() {
    const dispatch = useAppDispatch();
    const {value, loading} = useAppSelector(state => state.acyncCounter);

    const handleIncrement = (amount: number) => {
        dispatch(counterAsyncUpdate());
        setTimeout(() => {
            dispatch(incrementAsync(amount))
        }, 1000);
    }

    const handleDecrement = (amount: number) => {
        dispatch(counterAsyncUpdate());
        setTimeout(() => {
            dispatch(decrementAsync(amount));
        }, 1000);
    }

    return (
        <main id='counter'>
            <h1>{value}</h1>
            <div>
                <button onClick={() => handleDecrement(2)} className='btn'>-2</button>
                <button onClick={() => handleDecrement(1)} className='btn'>-</button>
                <button onClick={() => handleIncrement(1)} className='btn'>+</button>
                <button onClick={() => handleIncrement(2)} className='btn'>+2</button>
            </div>
            {loading && <h2>Loading...</h2>}
        </main>
    )
}