type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    const {name, callBack, disabled} = props

    return (
        <>
            <button className={"button"} disabled={disabled} onClick={callBack}>{name}</button>
        </>
    )
}