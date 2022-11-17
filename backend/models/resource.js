const moongose = require('mongoose')

const resourceSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    },
    links: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
})

const Resource = moongose.model('Resource', resourceSchema)