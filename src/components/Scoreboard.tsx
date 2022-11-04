type ScoreboardPropsType = {
    score: number
    styleScore: string
}
export const Scoreboard = (props: ScoreboardPropsType) => {
    const {score, styleScore} = props

    return (
        <div className={`scoreboard + ${styleScore}`}>{score}</div>
    )
}