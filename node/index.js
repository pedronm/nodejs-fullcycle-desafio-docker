const express = require('express')  
const app = express()
const dbUsers = require('./src/db/user')

const SERVER_PORT = process.env.SERVER_PORT || 8080

app.get('/inserir-usuario/:nome', (req,res) => {
  const nome = req.params.nome
  console.log('Nome inserido', JSON.stringify(nome))
  console.error('Nome inserido', JSON.stringify(nome))
  console.info('Nome inserido', JSON.stringify(nome))
  if(nome){
    dbUsers.insertUser({name: nome})
    res.send(`Usuário ${nome} inserido com sucesso!`)
  }
  else
    res.status(500).send('Erro ao gravar usuário')
})

app.get('/', (req, res) => {
  dbUsers.getUsers()
  .then((nomes) => {  
    console.log('teste de update 1') 
    console.log('Nomes cadastrados', nomes)
    if(nomes && nomes.length > 0)
      res.status(200).send(`<center><strong>Usuários</strong>: <ul>${nomes.map((nome) => '<li>' + nome.name + '</li>')}</ul></center>`)  
    else
      res.send('Nenhum usuário encontrado')

  })
})

app.get('/health', (req, res) => {
  res.send("I'm Alive")
})

app.listen(SERVER_PORT, () => { 
  console.log(`Server is running on port ${SERVER_PORT}`)
})
