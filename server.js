const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/addTwoNumbers', (req, res) => {
    const num1 = parseInt(req.query.number1);
    const num2 = parseInt(req.query.number2);

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ statusCode: 400, message: 'Bad Request' });
    } else {
        const sum = num1 + num2;
        const obj = { statusCode: 200, message: 'Success', data: sum };
        res.json(obj);
    }
});

app.listen(port, () => {
    console.log('Server started - 2');
});
