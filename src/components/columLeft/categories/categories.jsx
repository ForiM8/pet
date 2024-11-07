import "./categories.scss"

export const Categories = ({
    title,
    count
}) => {
    return(
        <div className="container">
            <div className="container__title" style={{cursor:'pointer'}}>{title}</div>
            <div className="container__count">({count})</div>
        </div>
    )
}