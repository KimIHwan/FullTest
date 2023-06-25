import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>로그인</h1>
      <form>
        <input required type='text' placeholder='아이디' />
        <input required type='password' placeholder='비밀번호' />
        <button>로그인</button>
        <p>에러</p>
        <span>아이디가 없으십니까? <Link to="/register">회원가입</Link></span>
      </form>
    </div>
  )
}

export default Login