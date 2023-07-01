import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })
  const [err, setError] = useState(null)

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const navigate = useNavigate()

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("/auth/register", inputs)
      navigate("/login")
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>회원가입</h1>
      <form>
        <input required type='text' placeholder='아이디' name='username' onChange={handleChange} />
        <input required type='email' placeholder='이메일' name='email' onChange={handleChange} />
        <input required type='password' placeholder='비밀번호' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>회원가입</button>
        {err && <p>{err}</p>}
        <span>아이디가 있으십니까? <Link to="/login">로그인</Link></span>
      </form>
    </div>
  )
}

export default Register