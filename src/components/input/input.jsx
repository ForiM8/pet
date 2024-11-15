export const Input = ({
    input_type,
    initialValue = null,
    register,
    name,
    errors = [],
    label,
    validate = {},
    classNameLabel,
    classNameInput
}) => {
    return (
        <div className='wrapper'>
            <input {...register(name, validate)}
                defaultValue={initialValue}
                type={input_type}
                className={classNameInput}
                required="required" />
            <label className={classNameLabel}>{label}</label>
           
        </div>
    )
}