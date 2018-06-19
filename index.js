const express = require('express');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./Users/tiagodoprado/Desktop/Node/Persistence/Chinook_Sqlite_AutoIncrementPKs-7.sqlite');

db.each('SELECT * from Artist LIMIT 100', (err, row) => {
    if (err) throw err;
    console.log(row);
  });
  db.close();