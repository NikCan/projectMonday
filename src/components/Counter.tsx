import {Button} from "./Button";

type CounterPropsType = {
    onClickReset: () => void
    onClickInc: () => void
    score:number
}
export const Counter = (props: CounterPropsType) => {
    const {onClickReset, onClickInc, score} = props

    return (
        <div className={"counter"}>
            <Button callBack={onClickInc} name={"inc"} disabled={score===5&&true}/>
            <Button callBack={onClickReset} name={"reset"} disabled={score===0&&true}/>
        </div>
    )
}