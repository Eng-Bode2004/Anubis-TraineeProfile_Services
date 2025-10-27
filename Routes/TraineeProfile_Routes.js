const express = require('express')

const router = express.Router();


// Calling Controller
const TraineeProfile_Controller = require('../Controllers/Trainee_Profile_Controllers');
const creating_Profile = require('../Middlewares/Creating_Profile_Middlewares');

router.post('/', creating_Profile, TraineeProfile_Controller.createTraineeProfile);

module.exports = router;