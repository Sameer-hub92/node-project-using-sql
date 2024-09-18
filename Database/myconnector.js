const mysql=require('mysql')

const obj=mysql.createPool({
    host:'localhost',
    database:'hp',
    user:'root',
    password:'',
    mutlipleStatements:true
})
module.exports=obj