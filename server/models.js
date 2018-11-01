const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/QuoteRanks", {useNewUrlParser:true}, 
(errs)=>console.log(errs?errs:"db gucci"));

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        minlength: [3, "Your name requires a minimum of three characters"]
    },
    quotes: [{
        content: {
            type: String, 
            minlength: [3, "A quote must contain at least three characters"]
        },
        votes: {
            type: Number, 
            default: 0
        }
    }]
}, {timestamps:true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
