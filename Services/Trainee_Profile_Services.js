const Trainee_Profile_Schema = require('../Models/TraineeProfile_Schema');

class Trainee_Profile_Services {

    async createTraineeProfile(TraineeProfileData) {
        try {
            const { name, date_of_birth, gender, height_cm, effort_level,gone_Days } = TraineeProfileData;
            const { first_name, middle_name, last_name } = name || {};

            // // Check if Trainee Profile exists
            // const existTraineeProfile = await Trainee_Profile_Schema.findOne({
            //     'name.first_name': first_name,
            //     'name.middle_name': middle_name,
            //     'name.last_name': last_name,
            // });

            // if (existTraineeProfile) {
            //     throw new Error('Trainee profile already exists');
            // }

            // Calculate Age
            const calculateAge = (birthDate) => {
                const today = new Date();
                const birth = new Date(birthDate);
                let age = today.getFullYear() - birth.getFullYear();
                const monthDiff = today.getMonth() - birth.getMonth();

                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                    age--;
                }

                return age;
            };

            const age = calculateAge(date_of_birth);

            if (age < 0) throw new Error('Date of birth cannot be in the future');
            if (age > 150) throw new Error('Please enter a valid date of birth');

            // Save new Trainee Profile
            const newTrainee_Profile = new Trainee_Profile_Schema({
                name: {
                    first_name: first_name?.trim() || '',
                    middle_name: middle_name ? middle_name.trim() : undefined,
                    last_name: last_name?.trim() || '',
                },
                gender: gender ? gender.toLowerCase() : undefined,
                age,
                date_of_birth,
                effort_level,
                height_cm,
                gone_Days
            });

            await newTrainee_Profile.save();
            return newTrainee_Profile;

        } catch (error) {
            throw new Error(error.message || 'Error creating trainee profile');
        }
    }

}

module.exports = new Trainee_Profile_Services();
