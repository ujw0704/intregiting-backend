import React, { useState } from 'react'

function Form1() {
    const[name,setName] =useState()
    const[password,setPassword]=useState()

    function handlesubmit(e){
        e.preventDefault()
        console.log(name,password)

    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
      <input type='text'name='uname'placeholder='Enter Your name'value ={name}onChange={(e=>setName(e.target.value))} />
      <input type='text'name='uname'placeholder='Enter Your password' value={password}onChange={(e=>setPassword(e.target.value))} />
      </form>
    </div>
  )
}

export default Form1
