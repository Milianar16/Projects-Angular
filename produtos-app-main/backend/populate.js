const fs = require('fs')
const path = require('path')
const { faker } = require('@faker-js/faker')

faker.setLocale('pt_BR')

function populate() {
  const database = {
    produtos: []
  }

  new Array(20)
  .fill('')
  .forEach((_, index) => {
    const produto = {
      id: index + 1,
      nome: faker.commerce.productName(),
      preco: faker.commerce.price(),
      descricao: faker.commerce.productDescription(),
      foto: ''
    }

    database.produtos.push(produto)
  })

  const stringifyJson = JSON.stringify(database, null, 2)

  fs.writeFileSync(path.join(__dirname, 'database.json'), stringifyJson, {
    encoding: 'utf-8'
  })
}

populate()
