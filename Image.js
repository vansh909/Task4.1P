import image from "./landscape.jpeg"
import React from 'react'
import './Image.css'
class Image extends React.Component {
    state = {  } 
    render() { 
        return (
            <img className="_img" src={image} alt="RandomImage" />
        );
    }
}
export default Image;