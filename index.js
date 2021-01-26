const express = require('express');
const cron = require('node-cron');

const app = express();

const task = cron.schedule('1 * * * * *', () => {
    console.log('running a task every minute at the 5th second');
});

app.get('/',(req, res) => {
    task.start();
    res.send('Task started succssfully!');
});

app.listen(3000,()=>console.log('server is running'));
