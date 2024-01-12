// making this for actual testing and using redis to make the app faster
// using a fakeapi called as https://jsonplaceholder.typicode.com/todos and make this fetching process faster

const { default: axios } = require('axios');
const epxress = require('express');

const client = require('./client')

const app = epxress();

app.use(epxress.json());

app.get('/', async function(req, resp){

    const cacheValue = await client.get('todos');

    if(cacheValue) return resp.json(JSON.parse(cacheValue));

    const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");

    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 40);

    return resp.json(data);
})

app.listen(9000, () => {
    console.log("Server started at 9000");
})