import React from 'react'

const FormInput = ({ id, placeholder, type, label, name, handleChange, value, errors }) => {
    return (
        <div className='form-inputs'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={handleChange} />
            {errors && errors[name] && <p>{errors[name]}</p>}
        </div>
    )
}

export default FormInput;