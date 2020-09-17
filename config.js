const { mongo } = require("mongoose");

module.exports = {
    MONGO_URI: "mongodb://newuser:test123@mongocluster-shard-00-00.fnqr3.mongodb.net:27017,mongocluster-shard-00-01.fnqr3.mongodb.net:27017,mongocluster-shard-00-02.fnqr3.mongodb.net:27017/newdatabase?ssl=true&replicaSet=atlas-mpr4dy-shard-0&authSource=admin&retryWrites=true&w=majority"
}