const redis = require('ioredis');

data = {
    host: '51.89.254.13',
    port: 6379,
    password: '@aN3$8jaMq'
}

const client = redis.createClient(data);

exports.storeData = (myKey, myValue) => {
    const client = redis.createClient(data);
    console.log('girdim')

    client.on('connect', () => {
        console.log('Connected to Redis');

        // Switch to the specified DB
        client.select(1, () => {
            console.log(`Switched to DB 1`);
        });

        // Set the key with an expiration of 5 minutes (300 seconds)
        client.setex(myKey, 3000, myValue, (err, reply) => {
            if (err) {
                console.error(err);
                client.quit();
            } else {
                console.log('Data stored with 5-minute expiration:', reply);
                client.quit();
            }
                
            });
        });
    }



// exports.fetchData = async (mykey)  => {
//     const client = redis.createClient(data);
//     console.log('girdim')
//     console.log(mykey)

    
//     client.on('connect', () => {
//         console.log('Connected to Redis');

//         // Switch to the specified DB
//         client.select(1, () => {
//             console.log(`Switched to DB 1`);
//         });
    
//     console.log("adamsın")

//     client.get(mykey, (err, value) => {
//         if (err) {
//             return err 
//         } else {
//             return value 
//         }
    
// })
// })
// }

exports.fetchData = async (mykey) => {
    return new Promise((resolve, reject) => {
        const redisClient = new redis(data);
    
        redisClient.on("connect", () => {
            console.log("Connected to Redis");
        });
        redisClient.select(1, () => {
            console.log(`Switched to DB 1`);
        });
        redisClient.get(mykey, (err, value) => {
            if (err) {
                console.error("Error:", err);
                reject(err);
            } else {
                console.log("Retrieved value:", value);
                resolve(value);
                if (value==null) {
                    
                    
                }else{
                    
                    return value 
                }
            }

            redisClient.quit();
        });
    });
};



client.on('error', (err) => {
    console.error('Redis Error:', err);
});