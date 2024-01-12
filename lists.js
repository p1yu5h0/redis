const client = require("./client")

async function init() {
    await client.lpush("piyush", 1);
    await client.lpush("piyush", 2);
    await client.lpush("piyush", 3);
    await client.lpush("piyush", 4);
    await client.lpush("piyush", 5);
    console.log(await client.lrange("piyush", 0, -1));

}
init();
