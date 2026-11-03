const test=require('node:test'),assert=require('node:assert/strict'),Game=require('../game2048-engine.js');
function board(row){const g=new Game(()=>0);g.cells=[...row,...Array(12).fill(0)];g.score=0;g.spawn=()=>{};return g;}
test('2048 merges each tile once and awards merged values',()=>{const g=board([2,2,2,2]);g.move('left');assert.deepEqual(g.cells.slice(0,4),[4,4,0,0]);assert.equal(g.score,8);});
test('2048 movement direction and non-chain merge',()=>{const g=board([2,2,4,0]);g.move('right');assert.deepEqual(g.cells.slice(0,4),[0,0,4,4]);g.move('down');assert.deepEqual(g.cells.slice(12),[0,0,4,4]);});
test('2048 no-op never spawns',()=>{const g=board([2,0,0,0]);let count=0;g.spawn=()=>count++;assert.equal(g.move('left'),false);assert.equal(count,0);g.move('right');assert.equal(count,1);});
test('2048 detects game over and allows continuing beyond target',()=>{const g=board([0,0,0,0]);g.cells=[2,4,2,4,4,2,4,2,2,4,2,4,4,2,4,2];assert.equal(g.over,true);g.cells[0]=4;assert.equal(g.over,false);g.cells[0]=2048;assert.equal(g.won,true);});
