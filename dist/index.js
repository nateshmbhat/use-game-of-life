'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var immer = require('immer');

var useGameOfLife = function (_a) {
    var _b = _a.updateInterval, updateInterval = _b === void 0 ? 500 : _b, _c = _a.gridRows, gridRows = _c === void 0 ? 50 : _c, _d = _a.gridColumns, gridColumns = _d === void 0 ? 50 : _d, _e = _a.randomizeGrid, randomizeGrid = _e === void 0 ? false : _e, _f = _a.randomGridAlivePercent, randomGridAlivePercent = _f === void 0 ? 50 : _f;
    var _getEmptyGrid = function () {
        var rows = [];
        for (var i = 0; i < gridRows; i++) {
            rows.push(Array.from(new Array(gridColumns), function () { return 0; }));
        }
        return rows;
    };
    var _getRandomGrid = function () {
        var rows = [];
        for (var i = 0; i < gridRows; i++) {
            rows.push(Array.from(new Array(gridColumns), function () { return Math.random() < (randomGridAlivePercent / 100) ? 1 : 0; }));
        }
        return rows;
    };
    var runningRef = react.useRef(false);
    var _g = react.useState(false), running = _g[0], setrunning = _g[1];
    var _h = react.useState(function () {
        return randomizeGrid ? _getRandomGrid() : _getEmptyGrid();
    }), grid = _h[0], setGrid = _h[1];
    var setCell = function (r, c, value) {
        setGrid(function (g) {
            return immer.produce(g, function (draft) {
                draft[r][c] = value ? 1 : 0;
            });
        });
    };
    var isRunning = function () {
        return running;
    };
    var start = function () {
        setrunning(true);
        runningRef.current = true;
        runSimulation();
    };
    var stop = function () {
        setrunning(false);
        runningRef.current = false;
    };
    var clearGrid = function () {
        setGrid(_getEmptyGrid());
    };
    var countNeightBours = react.useCallback(function (g, r, c) {
        var n = 0;
        var operations = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];
        operations.forEach(function (pair) {
            var newR = r + pair[0];
            var newC = c + pair[1];
            if (newR >= 0 && newR < gridRows && newC >= 0 && newC < gridColumns && g[newR][newC] == 1) {
                n += 1;
            }
        });
        return n;
    }, []);
    var runSimulation = react.useCallback(function () {
        if (!runningRef.current)
            return;
        setGrid(function (g) { return immer.produce(g, function (gCopy) {
            return gCopy.forEach(function (row, r) {
                return row.forEach(function (_col, c) {
                    var n = countNeightBours(g, r, c);
                    if (gCopy[r][c] == 0 && n == 3) {
                        gCopy[r][c] = 1;
                    }
                    else {
                        if (n < 2 || n > 3)
                            gCopy[r][c] = 0;
                    }
                });
            });
        }); });
        setTimeout(runSimulation, updateInterval);
    }, []);
    return { grid: grid, setCell: setCell, start: start, stop: stop, isRunning: isRunning, clearGrid: clearGrid };
};

exports.default = useGameOfLife;
//# sourceMappingURL=index.js.map
