const connection = require('../models/schema-execution');
const tables = require('../models/table-names');


// for insert registration ->Write
function createAuthentication(user){
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${tables.REGISTRATION} (name, email, password, position)
         VALUES ('${user.name}', '${user.email}', '${user.password}', '${user.position}')`;
        connection.query(query, (err, result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}




module.exports = {
    createAuthentication
}