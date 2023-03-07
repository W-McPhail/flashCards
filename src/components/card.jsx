import React from 'react';  
import {useState} from 'react';   

const Card = (props) => { 
    const[info, setInfo] = useState(props.front); 
    const handleClick = () => {
        setInfo(info === props.front ? props.back : props.front);
    };  

    return(
        <div className="Card" onClick={handleClick}>  
            {info}  
        </div>
    ); 
} 

export default Card; 