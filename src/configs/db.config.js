const mongoose = require('mongoose');

mongoose.connect(process.env.URL_MONGODB)
.then(() => {
    console.log("Conectado a MongoDB")
})
.catch(console.log)