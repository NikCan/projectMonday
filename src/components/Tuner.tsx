import {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";

export type tunerValuesType = {
    tunerStartValue: number
    tunerMaxValue: number
}
type TunerPropsType = {
    showMessage: (message: string, error: boolean) => void
    onClickSet: (values: tunerValuesType) => void
}
export const Tuner = (props: TunerPropsType) => {
    const {onClickSet, showMessage} = props
    const [tunerValues, setTunerValues] = useState<tunerValuesType>({tunerMaxValue: 0, tunerStartValue: 0})
    let [error, setError] = useState<boolean>(false)
    useEffect(() => {
        const valuesFromLocal = localStorage.getItem('values')
        if (valuesFromLocal) {
            const newValues = JSON.parse(valuesFromLocal)
            setTunerValues({tunerMaxValue: newValues.maxValue, tunerStartValue: newValues.startValue})
        }
    }, [])
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTunerValues({...tunerValues, tunerMaxValue: e.currentTarget.valueAsNumber})
        setError(false)
        if (e.currentTarget.valueAsNumber <= tunerValues.tunerStartValue || tunerValues.tunerStartValue < 0) {
            setError(true)
            showMessage("Incorrect value!", true)
        } else {
            showMessage("enter values and press 'set'", false)
        }

    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTunerValues({...tunerValues, tunerStartValue: e.currentTarget.valueAsNumber})
        setError(false)
        if (e.currentTarget.valueAsNumber >= tunerValues.tunerMaxValue || e.currentTarget.valueAsNumber < 0) {
            setError(true)
            showMessage("Incorrect value!", true)
        } else {
            showMessage("enter values and press 'set'", false)
        }
    }
    const onClickSetHandler = () => {
        onClickSet(tunerValues)
    }
    return (
        <>
            <div className={`tuner`}>
                <div className={"inputValue"}>max value:<input
                    className={error ? "errorInput" : ""}
                    type={"number"}
                    value={tunerValues.tunerMaxValue}
                    onChange={onChangeMaxValueHandler}
                /></div>
                <div className={"inputValue"}>start value:<input
                    className={error ? "errorInput" : ""}
                    type={"number"}
                    value={tunerValues.tunerStartValue}
                    onChange={onChangeStartValueHandler}
                /></div>
            </div>
            <div className={"counter"}>
                <Button
                    className={"button"}
                    callBack={onClickSetHandler}
                    name={"set"}
                    disabled={error}
                />
            </div>
        </>
    )
}
