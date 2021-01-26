const express = require('express');
const cron = require('node-cron');

const app = express();

let count = 0;

const task = cron.schedule('* 1 * * *', () => {
    count++;
    console.log('running a task '+count.toString());
});
task.stop();

app.get('/',(req, res) => {
    task.start();
    res.send('Task started succssfully!');
    console.log('task started');
});

app.get('/count', (req, res) => {
    res.send("<h1>"+count.toString()+"</h1>");
});

app.listen(3000,()=>console.log('server is running'));
