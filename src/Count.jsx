import React, { useState } from 'react'

const Count = () => {

    const [form, setForm] = useState({
        name: "", email: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = () => {
        console.log(form.name);
        console.log(form.email);
    }

    return (
        <><label>Name:</label>
            <input type="text" name="name" onChange={handleChange} /><br />
            <label>Email:</label><input type="email" name="email" onChange={handleChange} /><br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Count;