import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>회원가입</h1>
      <form>
        <input required type='text' placeholder='아이디' />
        <input required type='email' placeholder='이메일' />
        <input required type='password' placeholder='비밀번호' />
        <button>회원가입</button>
        <p>에러</p>
        <span>아이디가 있으십니까? <Link to="/login">로그인</Link></span>
      </form>
    </div>
  )
}

export default Register