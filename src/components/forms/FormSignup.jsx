import React, { useEffect } from 'react'
import FormInput from './FormInput';
import FormButton from './FormButton';
import useForm from '../../hooks/useForm';
import validate from '../../utils/validate.jsx';

const FormSignup = () => {

    const { handleChange, value, handleSubmit, errors } = useForm(validate);

    return (
        <div className='form-container-right'>
            <form action='' onSubmit={handleSubmit}>
                <h1>Get Started with us today! Create your account</h1>
                <FormInput id={"userName"} placeholder={"Enter your username"} name={"username"} type={"text"} label={"UserName"} value={value.username} handleChange={handleChange} errors={errors} />
                <FormInput id={"email"} placeholder={"Enter your email"} name={"email"} type={"email"} label={"Email"} value={value.email} handleChange={handleChange} errors={errors} />
                <FormInput id={"password"} placeholder={"Enter your password"} name={"password"} type={"password"} label={"Password"} value={value.password} handleChange={handleChange} errors={errors} />
                <FormInput id={"confirmPassword"} placeholder={"Enter your confirm password"} name={"confirmpassword"} type={"password"} label={"Confirm Password"} value={value.confirmpassword} handleChange={handleChange} errors={errors} />

                <FormButton type={"submit"} btn={"Sign Up"} />

                <span className='form-login'>Already have an account? <a href="#">Login here</a> </span>

            </form>
        </div>
    )
}

export default FormSignup;