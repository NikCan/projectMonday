import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Scoreboard} from "./components/Scoreboard";

function App() {
    const [score, setScore] = useState<number>(0)
    const onClickInc = () => {
        setScore(score<5 ? score+1 : 5)
    }
    const onClickReset = () => {
        setScore(0)
    }
    return (
        <div className="App">
            <Scoreboard score={score} styleScore={score===5 ? "error" : ""}/>
            <Counter score={score} onClickInc={onClickInc} onClickReset={onClickReset}/>
        </div>
    );
}

export default App;
