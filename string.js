const client = require("./client")

async function init() {
    client.set("user:5", "nikhil rawat");
    client.setnx("user:5", "nikhit");
    client.set("user:7", "laxman");
    await client .expire("user:7", 10);
    for(let i = 1; i<=7; i++){
        const result = await client.get('user:' + i)
        console.log(`Result -> ${result}`);
    }
}
init();

