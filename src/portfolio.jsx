import React from 'react'

const data=[{
    id:1,
    image:'images/adventure.jpeg',
    word:'adventure',
    sentence:'A website designed by me that shows how easy you can explore the world, So has to enjoy more of life',
link:'https://clide.netlify.app',
},
{
    id:2,
    image:'images/calculator.webp',
    word:'calculator',
    sentence:'This is an application in which you can be able to add,subtract,divide amd multiply and they are working all fine',
link:'https://main--boisterous-kelpie-c9b42f.netlify.app',
},
{
    id:3,
    image:'images/camera.jpeg',
    word:'movie camp',
    sentence:'This is an app with creative functions in which you can search for any movie of your choice and it will bring it out for you ',
link:'https://campmovie.netlify.app',
},
{
    id:4,
    image:'images/cart.png',
    word:'shoplit',
    sentence:'This is an ecommerce website that you can directly order from their store.This website was developed just to test my ability, so it is not real',
link:'https://seyi-ecommerce.netlify.app',
},
{
    id:5,
    image:'images/food.jpeg',
    word:'foodie',
    sentence:'It is an application that helps poeple to look for their favourite food and how it is prepared,It help for both knowledgeable and unknowledgeable cook.',
link:'https://foodie.netlify.app',
},
{
    id:6,
    image:'images/website.jpeg',
    word:'bolu tail',
    sentence:'A cool website deveoped by reactjs and tailwind that actually shows my knowledge on how to go about tailwind and it gives view on how website use to work',
link:'https://bolu-tail.netlify.app',
},
]
function Port(){
    return(
        <div>
     <div className='full-container-contact'>
<h1><span>my</span> portfolio</h1>
        </div>
        <div className='port-container'>
            <h1>As a professional web developer,I develop applications and i design website
             from scratch.These are few of my works</h1>
             <div className='port-grid'>
                {
                    data.map((item)=>{
                        return(
                            <div className='flex-port' key={item.id}>
<div className='img-port'>
<img src={item.image}/>
</div>
<h3>{item.word}</h3>
<p>{item.sentence}</p>
<a href={item.link}><button>Check Out</button></a>
                            </div>
                        )
                    })
                }
             </div>
        </div>
        </div>
    )
}
export default Port;