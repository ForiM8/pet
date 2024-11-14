export const BottomBlock = ({
    bigText,
    smalltextOne,
    smalltextTwo,
    smalltextTree,
    smalltextFour,
    smalltextFive
 }) => {
    return (
        <div className="footer__container__color__bottom__container__block">
            <div className="footer__container__color__bottom__container__block-bigText">{bigText}</div>
            <div className="footer__container__color__bottom__container__block-smalltext">{smalltextOne}</div>
            <div className="footer__container__color__bottom__container__block-smalltext">{smalltextTwo}</div>
            <div className="footer__container__color__bottom__container__block-smalltext">{smalltextTree}</div>
            <div className="footer__container__color__bottom__container__block-smalltext">{smalltextFour}</div>
            <div className="footer__container__color__bottom__container__block-smalltext">{smalltextFive}</div>
        </div>
    )
}