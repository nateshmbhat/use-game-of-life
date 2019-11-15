import React, { useState, useEffect, useCallback, useRef } from 'react';
import useGameOfLife from 'use-game-of-life' ; 

const App  = () => {

  const {grid , setCell ,  start , stop , isRunning  } = useGameOfLife({updateInterval : 250 , randomizeGrid : true , randomGridAlivePercent : 30 }) ;

  return (
    <>
      <div className="App" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(50 , 1fr)',
        gridAutoRows: '19px'
      }} >
        {
          grid.map((row, r) =>
            row.map((col, c) =>
              <div key={`${r}-${c}`}
                style={{
                  border: '1px solid black',
                  backgroundColor: grid[r][c] ? 'green' : undefined
                }}
                onClick={() => {
                  setCell( r , c, !grid[r][c]) ;  
                  console.log("You clicked ", r, c)
                }}
              />
            )
          )
        }
      </div>
      <button onClick={() => { 
        if(isRunning()){
          stop() ; 
        }
        else{
          start() ; 
        }
      }}>{isRunning()? 'Stop' : 'Start'}</button>
    </>
  );
}

export default App;
