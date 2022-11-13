import {Button} from "./Button";
import {valuesType} from "../App";

type CounterPropsType = {
    onClickReset: () => void
    onClickInc: () => void
    message: string
    styleScore: string
    values: valuesType
}
export const Counter = (props: CounterPropsType) => {
    const {onClickReset, onClickInc, values, message, styleScore} = props

    return (
        <>
            <div className={`scoreboard + ${styleScore}`}>{message ? message : values.currentValue}</div>
            <div className={"counter"}>
                <Button
                    className={"button"}
                    callBack={onClickInc}
                    name={"inc"}
                    disabled={values.currentValue === values.maxValue || message.length !== 0}/>
                <Button
                    className={"button"}
                    callBack={onClickReset}
                    name={"reset"}
                    disabled={message.length !== 0}/>
            </div>
        </>
    )
}