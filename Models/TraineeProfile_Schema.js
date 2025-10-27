const mongoose = require('mongoose');

const TraineeProfile = new mongoose.Schema({


    name:{
        first_name:{
            type:String,
            required:true
        },

        last_name:{
            type:String,
            required:true,
        },

        middle_name:{
            type:String,
        },
    },


    date_of_birth:{
        type:Date,
        required:true,
    },


    age:{
        type:Number,
    },

    height_cm:{
        type:Number,
        required:true,
    },

    profile_Image:{
        type:String,
    },

    is_Subscribed:{
        type:Boolean,
        default:false,
    },


    SubscriptionPlan:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subscription',
    },

    gender:{
        type:String,
        required:true,
        enum: ['male', 'female'],
    },

    effort_level:{
        type:String,
        enum: ['Very Low', 'Low', 'Moderate', 'High', 'Very High']
    }

})

module.exports = new mongoose.model('Trainee Profile',TraineeProfile);