const axios = require('axios');
const User = require('../models/User');

exports.getUser = async (req, res) => {
    try {
        // Fetch user data from the external API
        const response = await axios.get('https://randomuser.me/api/?gender=female');
        const userData = response.data.results[0];

        // Save user data to MongoDB
        const user = new User({
            name: userData.name,
            email: userData.email,
            dob: userData.dob,
            location: userData.location,
            picture: userData.picture,
            cell: userData.cell,
            login: userData.login
        });
        await user.save();

        // Return user data
        res.json(userData);
    } catch (error) {
        console.error('Error getting user data:', error);
        res.status(500).json({ message: 'Error getting user data' });
    }
};
