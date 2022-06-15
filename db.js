let mysql=require('mysql');
let util=require('util');
let request=require('request');
const env=require('./env.json')

let node_env=process.env.NODE_ENV ||'production';
let dbcon=mysql.createConnection({
    host:env[node_env].host,
    user:env[node_env].user,
    password:env[node_env].password,
    database:env[node_env].database
});
dbcon.connect();

module.exports.dbcon=dbcon;