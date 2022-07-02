const express = require('express')
const app = express()
const mysql = require('mysql')
const faker = require('faker-br')


const connection = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'test'
})

connection.query(
    "CREATE TABLE IF NOT EXISTS PEOPLE (ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL, NAME VARCHAR(255));"
)

app.get('/', (_, res) => {
    connection.query(`INSERT INTO PEOPLE(NAME) VALUES('${faker.name.firstName()} ${faker.name.lastName()}');`) 

    msg = "<h1>Full Cycle Rocks!</h1><br/>"
    connection.query("SELECT * FROM PEOPLE;", (error, results, _) => {
        if (error) throw error

        results.forEach(item => { 
            msg += `<p>${item.ID} - ${item.NAME}</p><br/>`
        })
        res.send(msg)
    })
}),

app.listen(3000, () => {
    console.log("Up on port 3000!")
})