import React from 'react'



const Menu = () => {
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
        <div className='menu'>
            <h1>다른 추천 글</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt='' />
                    <h1>{post.title}</h1>
                    <button>read more</button>
                </div>
            ))}
        </div>
    )
}

export default Menu