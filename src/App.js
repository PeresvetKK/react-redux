import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "./reducers/reposReducer";

const App = () => {
    const dispatch = useDispatch()
    // useSelector - позволяет получать какие-либо данные из состояния
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        // вызываем dispatch, в который передаём функцию setCount, которая будет
        // возвращать action и передадим в неё какое-либо число
        dispatch(setCount(5))
    }

    return (
        <div className="app">
            {/* при нажати на кнопку изменяем count */}
            <button onClick={() => onCountClick()}>COUNT</button>
            <div className="">{count}</div>
        </div>
    );
};

export default App;
