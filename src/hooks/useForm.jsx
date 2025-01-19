import { useState } from "react";

const useForm = (validate) => {
    const [value, setValue] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;

        setValue((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(value);

        if (Object.keys(validationErrors).length === 0) {
            alert("Form is submitted successfully");
            setValue({
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
            });
        }
    };

    return { handleChange, value, handleSubmit, errors };
}

export default useForm;