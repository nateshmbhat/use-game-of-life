# use-game-of-life

> 

[![NPM](https://img.shields.io/npm/v/use-game-of-life.svg)](https://www.npmjs.com/package/use-game-of-life) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-game-of-life
```

## Usage

```tsx
import useGameOfLife from 'use-game-of-life' ; 

const App  = () => {

  const {grid , setCell ,  start , stop , isRunning  } = useGameOfLife({updateInterval : 25 , randomizeGrid : true , randomGridAlivePercent : 30 }) ;

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
```

## License

MIT © [nateshmbhat](https://github.com/nateshmbhat)

---