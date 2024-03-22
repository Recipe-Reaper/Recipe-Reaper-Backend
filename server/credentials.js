module.exports = {
    mongo: {
        development: {
            // This is connecting to a local instance. Change this to a connection
            // string going to Mongodb Atlas if you prefer that
            connectionString: 'mongodb+srv://ElizabethU:RecipeReaperDB@recipereaper.oc4dbbr.mongodb.net/RecipeReaperData?retryWrites=true&w=majority&appName=RecipeReaper'
        },
        production: {
            connectionString: 'mongodb+srv://ElizabethU:RecipeReaperDB@recipereaper.oc4dbbr.mongodb.net/RecipeReaperData?retryWrites=true&w=majority&appName=RecipeReaper'
        }
    },
    session: {
        secret: "reaper of recipes",
        resave: false,
        saveUninitialized: false
    }
}