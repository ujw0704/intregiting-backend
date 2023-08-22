import React, { useState } from 'react';
import axios from "axios"

function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    function handelsubmit(e) {
        e.preventDefault();
        console.log(name, password)

        
        axios.post('http://localhost:8080/login', {name, password})
            .then((result) => {
                console.log(result.data)
                setName("")
                setPassword("")

            })
    }

console.log(name)
    return (
        <div>
            <form onSubmit={handelsubmit}>

                <input className='name' type="text" placeholder='Enter Your name' value={name} onChange={e => setName(e.target.value)} name="name" />
                <input className='name' type="text" placeholder='Enter Your password' value={password} onChange={e => setPassword(e.target.value)} password="password" />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default Form;
