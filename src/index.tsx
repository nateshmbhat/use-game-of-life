import { useRef, useState, useCallback } from "react";
import { produce as produceNextState } from 'immer';

const useGameOfLife = ({ updateInterval = 500, gridRows = 50, gridColumns = 50, randomizeGrid = false, randomGridAlivePercent = 50 }) => {
  const _getEmptyGrid = () => {
    let rows = []
    for (let i = 0; i < gridRows; i++) {
      rows.push(Array.from(new Array(gridColumns), () => 0));
    }
    return rows;
  }

  const _getRandomGrid = () => {
    let rows = []
    for (let i = 0; i < gridRows; i++) {
      rows.push(Array.from(new Array(gridColumns), () => Math.random() < (randomGridAlivePercent / 100) ? 1 : 0));
    }
    return rows;
  }



  const runningRef = useRef(false);
  const [running, setrunning] = useState(false)


  const [grid, setGrid] = useState(() => {
    return randomizeGrid ? _getRandomGrid() : _getEmptyGrid();
  });



  const setCell = (r: number, c: number, value: boolean) => {
    setGrid((g) => {
      return produceNextState(g, draft => {
        draft[r][c] = value ? 1 : 0;
      });
    });
  }
  const isRunning = () => {
    return running;
  }
  const start = () => {
    setrunning(true);
    runningRef.current = true;
    runSimulation();
  }
  const stop = () => {
    setrunning(false);
    runningRef.current = false;
  }

  const clearGrid = () => {
    setGrid(_getEmptyGrid());
  }

  const countNeightBours = useCallback((g: number[][], r: number, c: number) => {
    let n = 0;
    const operations = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]

    operations.forEach(pair => {
      let newR = r + pair[0];
      let newC = c + pair[1];

      if (newR >= 0 && newR < gridRows && newC >= 0 && newC < gridColumns && g[newR][newC] == 1) {
        n += 1;
      }
    })
    return n;
  }, []);


  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid(g => produceNextState(g, gCopy =>
      gCopy.forEach((row, r) =>
        row.forEach((_col, c) => {

          let n = countNeightBours(g, r, c);

          if (gCopy[r][c] == 0 && n == 3) {
            gCopy[r][c] = 1;
          }
          else {
            if (n < 2 || n > 3) gCopy[r][c] = 0;
          }
        })
      )))

    setTimeout(runSimulation, updateInterval);

  }, [])


  return { grid, setCell, start, stop, isRunning, clearGrid };
}

export default useGameOfLife; 