export const ColorBlock = ({
    className,
    bigText,
    smallText
}) => {
    return (
        <div className="footer__container__color__top__left__block">
            <div className={className}></div>
            <div className="footer__container__color__top__left__block-bigText">{bigText}</div>
            <div className="footer__container__color__top__left__block-smallText">{smallText}</div>
        </div>
    )
}