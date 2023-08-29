import React from 'react'
import "./FeaturedTutorials.css"
import Star from './star.png'

function FeaturedArticles() {
    const Data=[
        {
            id: '1',
            src:"https://mdbootstrap.com/img/new/standard/city/042.webp",
            heading: 'UNTOLD STORY OF MH-360',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore ipsam id laudantium magnam minima, molestiae, libero similique totam deserunt autem assumenda non, culpa perferendis repellat esse quos! Necessitatibus ipsum nihil perspiciatis consequuntur natus.',
            rating:"5",
            author:'Aviator',


        },
        {
            id: '2',
            src:"https://mdbootstrap.com/img/new/standard/city/044.webp",
            heading: 'UNTOLD STORY OF MH-360',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore ipsam id laudantium magnam minima, molestiae, libero similique totam deserunt autem assumenda non, culpa perferendis repellat esse quos! Necessitatibus ipsum nihil perspiciatis consequuntur natus.',
            rating:"5",
            author:'Aviator',


        },
        {
            id: '3',
            src:"https://mdbootstrap.com/img/new/standard/city/043.webp",
            heading: 'UNTOLD STORY OF MH-360',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore ipsam id laudantium magnam minima, molestiae, libero similique totam deserunt autem assumenda non, culpa perferendis repellat esse quos! Necessitatibus ipsum nihil perspiciatis consequuntur natus.',
            rating:"4.9",
            author:'Aviator',


        },

    ];
  return (
    <div className='TutorialContainer'>
        {Data.map((items)=>{
            return(
                <div className='TutorialCard'>
                <div className='TutorialImage'>
                <img src={items.src} 
                alt="Article Loading"
                height="100%"
                width="100%"/>
            </div>
            <div className='TutorialName'>
                <strong>{items.heading}</strong>
            </div>
            <div className='Description'>
                {items.desc}
            </div>
            <div className='AuthorName'>
                <img className='star' src={Star} alt="Failed to load" />
                <div className='rating'>{items.rating}</div>
                <div className='Author'>{items.author}</div>   
            </div>
        </div> 
            )
        })}
    </div>

  )
}

export default FeaturedArticles
