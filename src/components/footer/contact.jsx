export const Contact = ({ 
    svg,
    text
}) => {
    return (
        <div className="footer__container__color__center__contact">
            {svg}
            <div className="footer__container__color__center__contact-text">{text}</div>
        </div>
    )
}