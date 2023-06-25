import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://www.gamey.kr/news/photo/202204/3001464_88923_3417.jpg" alt="" />
        <div className="user">
          <img src="https://www.digimonmasters.com/images/header/visual_bg_dig02.png" alt="" />
          <div className="info">
            <span>JOHN</span>
            <p>2일 전</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>설명설명설명</h1>

        <p>
          <p>
            내용내용
          </p>
          <p>
            용내용내
            sdfsdfdf
          </p>
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single