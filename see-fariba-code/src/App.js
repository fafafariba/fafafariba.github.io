import React from 'react';
import './App.css';
import hairCoffee from './hair-coffee.png';

export default function App(props) {
    // let view = props.path == "/" ? <Splash /> : < Main />

    return(
      <main className="splash">
        <h1 id="first">FARIBA</h1>
        <h1 id="last">MASSAH</h1>
        <img src={hairCoffee} alt="logo" />
        <div className="title-wrapper">
          <h3>SOFTWARE ENGINEERESS</h3>
        </div>
        <button>CUT TO THE CHASE</button>
      </main>
    ); 
}
