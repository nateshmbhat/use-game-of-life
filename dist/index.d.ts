declare const useGameOfLife: ({ updateInterval, gridRows, gridColumns, randomizeGrid, randomGridAlivePercent }: {
    updateInterval?: number | undefined;
    gridRows?: number | undefined;
    gridColumns?: number | undefined;
    randomizeGrid?: boolean | undefined;
    randomGridAlivePercent?: number | undefined;
}) => {
    grid: number[][];
    setCell: (r: number, c: number, value: boolean) => void;
    start: () => void;
    stop: () => void;
    isRunning: () => boolean;
    clearGrid: () => void;
};
export default useGameOfLife;
