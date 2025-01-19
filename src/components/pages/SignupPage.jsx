import React from 'react'
import FormSignup from '../forms/FormSignup'
import '../forms/form.css'

const SignupPage = () => {
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>X</span>
                <div className='form-banner'>
                    <img src="https://freepngimg.com/download/universe/164950-realistic-vector-rocket-free-hd-image.png" alt="banner-img" />
                </div>
                <FormSignup />
            </div>
        </>
    )
}

export default SignupPage