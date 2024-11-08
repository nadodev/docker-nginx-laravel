const express = require('express');

const app = express();

const port = 5000;

const config = {
    host: 'mysql_db',
    database: 'laravel',
    user: 'nadojba',
    password: '1234'
}

const mysql = require('mysql');

const connection = mysql.createConnection(config);



app.get('/', (req, res) => {
    connection.connect((err) => {
        if (err) {
            console.log('Error connecting to DB', err);
            return;
        }
        console.log('Connection to DB successful');
    });
    
    const insertQuery = `INSERT INTO people (name) VALUES ('Pedro')`;
    
    connection.query(insertQuery, (err, results, fields) => {
        if (err) {
            console.log('Error inserting data', err);
            return;
        }
        console.log('Data inserted successfully');
    });

    const selectQuery = `SELECT * FROM people`;

    connection.query(selectQuery, (err, results, fields) => {
        if (err) {
            console.log('Error selecting data', err);
            return;
        }
        console.log('Data selected successfully');
        res.send(results);
    });
})

app.listen(port, () => {
    console.log('Server is running on port 3000');
});