const client = require("./client")

async function init(){
    await client.sadd("mikki", 1);
    await client.sadd("mikki", 7);
    await client.sadd("mikki", 3);
    await client.sadd("mikki", 6);
    await client.sadd("mikki", 5);
    await client.sadd("mikki", 1);
    await client.sadd("ramesh", 1);
    await client.sadd("ramesh", 7);
    await client.sadd("ramesh", 5);
    console.log(await client.smembers("mikki"), await client.smembers("ramesh"), await client.sinter("mikki", "ramesh"));
    
}

init();