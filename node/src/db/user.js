const {sql} = require("./db");

async function getUsers(){
    try{
        const saida = []
        await sql `
            select name from USERS
	            group by name
        `.cursor( async ([row]) => {
            console.log('Linha encontrada', JSON.stringify(row))
            saida.push(JSON.parse(JSON.stringify(row)))
            return row
        })
        console.log('Esse é o retorno', saida)
        return saida;
    }catch(e){
        console.log(e)
        return e
    }
}

async function insertUser({name}){
    try{

        const users = await sql `
            insert into USERS(name) values(${name})
            returning name
        `
    
        return users;
    }catch(e){
        return e
    }
    
}

module.exports ={
    getUsers,
    insertUser,
}