import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "hello",
      desc: "dfdf",
      img: "https://www.gamey.kr/news/photo/202204/3001464_88923_3417.jpg"
    },
    {
      id: 2,
      title: "hello2",
      desc: "dfdf22",
      img: "https://www.gamey.kr/news/photo/202204/3001464_88923_3417.jpg"
    },
    {
      id: 3,
      title: "hello333",
      desc: "dfdf3333",
      img: "https://www.gamey.kr/news/photo/202204/3001464_88923_3417.jpg"
    },
    {
      id: 4,
      title: "hello44",
      desc: "dfd44444f",
      img: "https://www.digimonmasters.com/images/header/visual_bg_dig02.png"
    },

    

  ]

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home