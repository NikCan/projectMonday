import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Scoreboard} from "./components/Scoreboard";

function App() {
    const maxValue = 5
    const [score, setScore] = useState<number>(0)
    const onClickInc = () => {
        setScore(score<maxValue ? score+1 : maxValue)
    }
    const onClickReset = () => {
        setScore(0)
    }
    return (
        <div className="App">
            <Scoreboard score={score} styleScore={score===maxValue ? "error" : ""}/>
            <Counter score={score} onClickInc={onClickInc} onClickReset={onClickReset} maxValue={maxValue}/>
        </div>
    );
}

export default App;
