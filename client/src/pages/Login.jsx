import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })
  const [err, setError] = useState(null)

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)


  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await login(inputs)
      navigate("/")
    }catch(err){
      setError(err.response.data)
    }
  }



  return (
    <div className='auth'>
      <h1>로그인</h1>
      <form>
        <input required type='text' placeholder='아이디' name="username" onChange={handleChange}/>
        <input required type='password' placeholder='비밀번호' name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>로그인</button>
        {err && <p>{err}</p>}
        <span>아이디가 없으십니까? <Link to="/register">회원가입</Link></span>
      </form>
    </div>
  )
}

export default Login