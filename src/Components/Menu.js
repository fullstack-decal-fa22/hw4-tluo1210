import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

//should have a button for each color 
//clicking that button will automatically create a post with the corresponding color

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color="red" handleClick = {props.handleClick}/>
          <Color color="blue" handleClick = {props.handleClick}/>
          <Color color="green" handleClick = {props.handleClick}/>
          <Color color="pink" handleClick = {props.handleClick}/>
      </div>
    );
}

export default Menu;