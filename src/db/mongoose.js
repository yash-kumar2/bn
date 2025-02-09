const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yash:1234@cluster0.h8so8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB locally'))
.catch(err => console.error('Could not connect to MongoDB', err));
