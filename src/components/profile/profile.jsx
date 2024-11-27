export const ProfileElement = ({
    classNameContainer,
    svg,
    classNameText,
    text
}) => {
    return (
        <div className={classNameContainer}>

            <div className="columLeft__container__elementActive-svg">
                {svg}
            </div>
            <div className={classNameText}>{text}</div>

        </div>
    )
}