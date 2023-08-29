import React from 'react'
import "./FeaturedArticles.css"
import Star from './star.png'

function FeaturedArticles() {
    const data=[
        {
            id: '1',
            src:"https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            heading: 'UNTOLD STORY OF MH-360',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae labore ipsam id laudantium magnam minima, molestiae, libero similique totam deserunt autem assumenda non, culpa perferendis repellat esse quos! Necessitatibus ipsum nihil perspiciatis consequuntur natus.',
            rating:"5",
            author:'Bob Hoover',


        },
        {
            id: '2',
            src:"https://images.newscientist.com/wp-content/uploads/2023/06/08135051/SEI_159409253.jpg?width=900",
            heading: 'TURBULENCE ON FLIGHT GETTING WORSE',
            desc:'Scientists have long predicted that warmer air will trigger alterations to air currents in the upper atmosphere, Now, Mark Prosser at the University of Reading, UK, and his colleagues have collected evidence that plane rides have indeed become bumpier, with analysis suggesting turbulence has increased significantly around the world over the past four decades',
            rating: "5",
            author:'Noel Wien',


        },
        {
            id: '3',
            src:"https://images.newscientist.com/wp-content/uploads/2021/06/09175214/ddc791_web.jpg?width=900",
            heading: 'EUROPEAN AIRLINES LOBBYING AGAINST EU CLIMATIC PLANS',
            desc:'Air France-KLM, IAG (the parent company of British Airways), Lufthansa and Ryanair – Europe’s four biggest airlines by carbon dioxide emissions – were found in the report to be the most regressive with their stance towards climate policies. InfluenceMap rated their position roughly on a par with the airline trade bodies IATA and Airlines for Europe (A4E).',
            rating: "5",
            author:'Jimmy',


        },

    ];
  return (
    <div className='ArticleContainer'>
        {data.map((item)=>{
            return(
                <div className='ArticleCard'>
                <div className='ArticleImage'>
                <img src={item.src} 
                alt="Article Loading"
                height="100%"
                width="100%"/>
            </div>
            <div className='ArticleName'>
                <strong>{item.heading}</strong>
            </div>
            <div className='Description'>
                {item.desc}
            </div>
            <div className='AuthorName'>
                <img className='star' src={Star} alt="Failed to load" />
                <div className='rating'>{item.rating}</div>
                <div className='Author'>{item.author}</div>   
            </div>
        </div> 
            )
        })}
    </div>

  )
}

export default FeaturedArticles
