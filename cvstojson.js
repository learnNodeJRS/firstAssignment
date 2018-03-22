const csv = require('csvtojson')
const fs =require ('fs')
const csvFilePath='/Users/xxxx/Node/assign1/'
const file='customer-data.csv'
const jsonfile='customer-data.json'

let csvwork = () => {

    let jsonTxt = ''
    var sep = ''

    csv()
    .fromFile(csvFilePath+file, (err) => {
        if (err) throw err
    })
    .on('json',(jsonObj) => {        
        jsonTxt += (sep + JSON.stringify(jsonObj))
        if (!sep) {
            sep = ','
        }    
    })
    .on('done',() => {
        //console.log (jsonTxt)
        console.log('done')
        fs.writeFile(csvFilePath+jsonfile, '[\n'+jsonTxt+'\n]', function (err) {
            if (err) throw err
        })
    })
}

fs.appendFile(csvFilePath+jsonfile, ']', function (err) {
    if (err) {
        console.log (err)
    }
})

csvwork()
