var sukien = require('events');

// var test = new sukien.EventEmitter();

// test.on('some', (a) => {
// console.log(a)
// })

// test.emit('some', 'lksdjlak');

var mainFunc = require('util');

var Persion = function(name){
  this.name = name
}

mainFunc.inherits(Persion, sukien.EventEmitter);

var sk = new Persion('Thang');
var bl = new Persion('jlklkj');

var people = [sk,bl];

for(var i of people) {
  i.on('talk', (a) => console.log(i.name + '_' + a))
  i.emit('talk', 'Mama');
}

