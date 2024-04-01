import MyButton from './components/MyButton';
import  React, { Component } from 'react';
import About from'./components/About.js';
import Profile from'./components/Concatenation.js';
import ShoppingList from'./components/RenderingLists.js';
import handleClick from './components/MyButton';

export default function MyApp(){
  return(
      <div>
          <h1>Welcome to My App</h1>
          <MyButton/>
          <About/>
          <Profile/>
          <ShoppingList/>
          <handleClick/>

          

          </div>
      
      

      
  );
}





  


