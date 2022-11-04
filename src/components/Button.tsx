type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    const {name, callBack, disabled} = props
    const onclickHandler = () => {
        callBack()
    }

    return (
        <>
            <button className={"button"} disabled={disabled} onClick={onclickHandler}>{name}</button>
        </>
    )
}