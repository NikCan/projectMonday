import {Button} from "./Button";

type CounterPropsType = {
    onClickReset: () => void
    onClickInc: () => void
    score: number
    maxValue: number
}
export const Counter = (props: CounterPropsType) => {
    const {onClickReset, onClickInc, score, maxValue} = props

    return (
        <div className={"counter"}>
            <Button callBack={onClickInc} name={"inc"} disabled={score === maxValue}/>
            <Button callBack={onClickReset} name={"reset"} disabled={score === 0}/>
        </div>
    )
}