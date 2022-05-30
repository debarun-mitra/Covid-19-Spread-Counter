const fs = require('fs');
let mycountries;
mycountries = fs.readFileSync(`countries.json`, `utf-8`, (err, val)=>{
    if (err) {
        console.log(`error happened`);
    }
    else{
        const myjson = JSON.parse(val);
        return myjson;
    }
});
const myc = JSON.parse(mycountries);

//console.log(mycountries[0]);
let newjson = [];

for (i=0; i<myc.length; i++) {
    if (myc[i].population){
        temp = {
            country: myc[i].country,
            code: myc[i].abbreviation,
        };
        newjson.push(temp);
    }

};
const newjson2 = JSON.stringify(newjson);
fs.writeFileSync('countryList.json', newjson2);

console.log(newjson.length);