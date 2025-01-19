import React from 'react'

const FormButton = ({ type, btn }) => {
    return (
        <div className='form-btn'>
            <button type={type}>{btn}</button>
        </div>
    )
}

export default FormButton;