const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/randomuser', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    location: String,
    cell: String,
    picture: String,
    password: String
});
const User = mongoose.model('User', userSchema);

app.get('/api/user', async (req, res) => {
    try {
        const user = await User.aggregate([{ $sample: { size: 1 } }]);
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
});

app.post('/api/user', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error saving user' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
