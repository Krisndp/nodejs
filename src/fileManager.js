const fs = require('fs');

module.exports = {
  creatNewFile: (fileName) => {
    const fd = fs.openSync(fileName, "w");
  },
  saveJSONtoFile: (obj, fileName) => {
    const jsonString = JSON.stringify(obj);
    fs.writeFile(fileName, jsonString, 'utf-8', (err, data) => {
      if(err) throw err;
      console.log(`Save to file ${fileName}`)
    })
  },
  readJSONtoFile: (fileName) => {
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
      let JsonO = JSON.parse(data);
      console.log(JsonO)
      console.log(`JsonFood = ${JSON.stringify(JsonO.foods)}`)
    })
  }
}