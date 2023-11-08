import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.query);
    res.send('<h1>Hello world!</h1>');
});

app.get('/users/:id', (req, res) => {
    res.send(req.params.id);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    res.send(JSON.stringify({username, password}));
});

app.get('/admin', (req, res) => {
    res.sendStatus(401);
});

app.listen(8080, () => {
    console.log('listening on port: http://localhost:8080');
});