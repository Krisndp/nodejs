const eventEmitter = require('events');
class Customer extends eventEmitter {

  constructor(name, gender){
    super();
    this.name = name;
    this.gender = gender;
  }
}
const mrJonh = new Customer("John", "male")

mrJonh.on("eventCall", (foods) => {
  for (let i in foods) {
    console.log(`${mrJonh.name} call ${foods[i]}`)
  }
})

console.log('Doo');
mrJonh.emit('eventCall', ['pizza', 'salad'])
module.exports = {

}
