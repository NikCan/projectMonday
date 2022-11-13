type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
    className: string
}
export const Button = (props: ButtonPropsType) => {
    const {className, name, callBack, disabled} = props

    return (
        <>
            <button className={className}
                    disabled={disabled}
                    onClick={callBack}
            >{name}</button>
        </>
    )
}