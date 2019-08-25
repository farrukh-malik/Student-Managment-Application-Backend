const connection = require('./connection');
const schema = require('./schema');

connection.connect(err => {

    if(err){
        throw err;
    }

    connection.query(schema.CREATE_REGISTRATION_TABLE, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('Registration Table Created');
    });

    connection.query(schema.CREATE_AUTHENTICATION_TABLE, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('Authentication Table Created');
    });
   

});

module.exports = connection;