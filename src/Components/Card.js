import React, {useState} from "react";
import image from '../Assets/Image.jpg';
import styles from './Card.module.css';

export const Card = ( props ) => {

    const [status, setStatus] = useState("normal");

    return (
        <div className={ styles.cardContainer } 
            onMouseEnter={() => setStatus("Hovered")} 
            onMouseLeave={() => setStatus("Normal")}
        >
            <img 
                src={image} 
                alt={props.alt}
            />
            <div className={ styles.cardSubText }>
                <h1 aria-label="title">{ props.title }</h1>
                <h2 aria-label="sender">{ props.sender }</h2>
                <br />
                <h3 aria-label="message">{ props.message }</h3>
            </div>

        </div>
    );
};
