import { useAppDispatch, useAppSelector } from "../../app/store/configureStore"
import { setBlue, setGreen, setRed } from "./colorsSlice";

export default function Colors() {
    const dispatch = useAppDispatch();
    const {red, green, blue} = useAppSelector(state => state.colors);

    return (
        <main>
            <form>
                <label>
                    Red:
                    <input value={red} onChange={(e) => dispatch(setRed(e.target.value))} type='text' name='red' />
                </label>
                <label>
                    Green:
                    <input value={green} onChange={(e) => dispatch(setGreen(e.target.value))} type='text' name='green' />
                </label>
                <label>
                    Blue:
                    <input value={blue} onChange={(e) => dispatch(setBlue(e.target.value))} type='text' name='blue' />
                </label>
            </form>
            <div id='color' style={{background: `rgb(${red}, ${green}, ${blue})`}}></div>
        </main>
    )
}