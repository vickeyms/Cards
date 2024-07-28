import React from 'react';

const userData=[
    {
        name:"Joshi",
        oor:"London",
        skills:["Java","c++","React","Node JS"],
        online:false,
        image:'1.jpeg',
    },
    {
        name:"Abraham",
        oor:"Washington",
        skills:["C Programming","Node JS","C#"],
        online:true,
        image:'file.webp',
    },
    {
        name:"Domnic",
        oor:"Europe",
        skills:["Ruby","HTML","Spring Boot"],
        online:false,
        image:'3.jpeg',
    }
]

function User(props){
    return(
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>
            {props.online?"online":"offline"}</span>
            <img src={props.image} className='img' alt='image'/>
            <h3>{props.name}</h3>
            <h3>{props.oor}</h3>
            <p>front end dev</p>
            <div className="buttons">
                <button className='primary'>Follow</button>
                <button className='primary-out'>request</button>
            </div>
            <div className="skills">
            <h6>skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <ul>

            </ul>
            </div>
            
            
        </div>

    );
}

const Cardss = () => {
  return (
    <>
    {
        userData.map((users,index)=>(<User key={index} 
            name={users.name} 
            oor={users.oor} 
            skills={users.skills} 
            online={users.online} 
            image={users.image}/>)
            
        )
    }

</> )}
export default Cardss