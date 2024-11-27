export const Input = ({
    input_type,
    initialValue = null,
    register,
    name,
    label,
    validate = {},
    classNameLabel,
    classNameInput,
    classNameWrapper,
    labelSymbol
}) => {
    return (
        <div className={classNameWrapper}>
            <input {...register(name, validate)}
                defaultValue={initialValue}
                type={input_type}
                className={classNameInput}
                required="required" />
            <label className={classNameLabel} style={{ display: 'flex' }}>{label} <div style={{color:"#F03800", marginLeft:'3px'}}>{labelSymbol}</div></label>
        </div>
    )
}