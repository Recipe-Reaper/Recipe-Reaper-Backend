module.exports = {
    mongo: {
        development: {
            // This is connecting to a local instance. Change this to a connection
            // string going to Mongodb Atlas if you prefer that
            connectionString: 'mongodb://127.0.0.1:27017/Recipe-Reaper?retryWrites=true&w=majority'
        },
        production: {
            connectionString: 'mongodb://127.0.0.1:27017/Recipe-Reaper?retryWrites=true&w=majority'
        }
    },
    session: {
        secret: "reaper of recipes",
        resave: false,
        saveUninitialized: false
    }
}