import {Button} from "./Button";

type SetterPropsType = {
    onClickSet: () => void
    // score: number
    // maxValue: number
}
export const Setter = (props: SetterPropsType) => {
    const {onClickSet} = props

    return (
        <div className={"counter"}>
            <Button
                className={"button"}
                callBack={onClickSet}
                name={"set"}
                disabled={false}
            />
        </div>
    )
}