import React from 'react';
import './App.css';

export default function App(props) {
    // let view = props.path == "/" ? <Splash /> : < Main />

    return(
      <main className="splash">
        <h1 id="first">FARIBA</h1>
        <h1 id="last">MASSAH</h1>
        <h3>SOFTWARE ENGINEER</h3>
        <button>CUT TO THE CHASE</button>
      </main>
    ); 
}
