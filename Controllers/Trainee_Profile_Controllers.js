const Trainee_Profile_Services = require('../Services/Trainee_Profile_Services');

class Trainee_Profile_Controllers {
    async createTraineeProfile(req, res) {
        try {
            const TraineeProfileData = req.body;

            if (!TraineeProfileData || Object.keys(TraineeProfileData).length === 0) {
                return res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: 'Profile data is required in request body',
                });
            }

            const result = await Trainee_Profile_Services.createTraineeProfile(TraineeProfileData);

            res.status(201).json({
                success: true,
                statusCode: 201,
                message: 'Trainee profile created successfully',
                data: result,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: 'Internal error occurred',
                error: error.message,
            });
        }
    }
}

module.exports = new Trainee_Profile_Controllers();
