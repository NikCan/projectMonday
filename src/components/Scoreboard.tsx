type ScoreboardPropsType = {
    score: number
    styleScore: string
    message?: string
}
export const Scoreboard = (props: ScoreboardPropsType) => {
    const {score, styleScore, message} = props

    return (
        <div className={`scoreboard + ${styleScore}`}>{message ? message : score}</div>
    )
}
