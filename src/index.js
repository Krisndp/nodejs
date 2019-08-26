// var fileManager = require('./fileManager');
// console.log('haha')
// const fileName = __dirname + '/../data/temp.txt';
// fileManager.creatNewFile(fileName)

// let jsonObject = {
//   foods: [
//     {
//       foodName: 'Cream tea',
//       foodDes: 'good'
//     },
//     {
//       foodName: 'Cream tea',
//       foodDes: 'good'
//     },
//     {
//       foodName: 'Cream tea',
//       foodDes: 'good'
//     },
//     {
//       foodName: 'Cream tea',
//       foodDes: 'good'
//     },
//   ],
//   resultCode: 200,
//   restaurantName: 'Sasimi BBQ'
// }
// jsonObject.address = "HaNoi - VietNam"
// fileManager.saveJSONtoFile(jsonObject, fileName);
// fileManager.readJSONtoFile(fileName)

const eventEmitter = require('events');
class Customer extends eventEmitter {

  constructor(name, gender){
    super();
    this.name = name;
    this.gender = gender;
  }
}
const mrJonh = new Customer("John", "male")
const mrJam = new Customer("Jam", "male")
const callBack = (foods, customer) => {
  for (let i in foods) {
    console.log(`${customer.name} call ${foods[i]}`)
  }
}
mrJonh.on("eventCall",callBack)
mrJam.on("eventCall",callBack)
console.log('Doo');
mrJonh.emit('eventCall', ['pizza', 'salad'], mrJam)
mrJam.emit('eventCall', ['pean', 'salad'], mrJam)