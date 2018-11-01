const Author = require("./models.js")

module.exports = 
{
    allAuthors: (req,res) => 
    {
        console.log("all biz in controller")
        Author.find({})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createAuthor: (req,res) => 
    {
        console.log("create author biz in controller")
        Author.create(req.body)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    oneAuthor: (req,res) => 
    {
        console.log("one biz in controller");
        Author.findById(req.params.author_id)
                .then(data=>console.log(data)||res.json(data))
                .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateAuthor: (req,res) => 
    {
        console.log("update biz in controller");
        console.log(req.body);
        Author.findByIdAndUpdate(req.params.author_id, req.body, {new:true, runValidators: true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    deleteAuthor: (req,res) =>
    {
        console.log("delete author biz in controller")
        Author.findByIdAndDelete(req.params.author_id)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createQuote: (req,res) => 
    {
        console.log("create quote biz in controller");
        console.log(req.body);
        Author.findByIdAndUpdate(req.params.author_id, 
            {$push:{quotes:req.body}}, {new:true, runValidators:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    deleteQuote: (req,res) =>
    {
        console.log("delete quote biz in controller")
        Author.findOneAndUpdate({"quotes._id": req.params.quote_id}, 
        {$pull: {"quotes":{"_id": req.params.quote_id}}}, {new:true, runValidators:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    updateQuote: (req,res) =>
    {
        console.log("delete quote biz in controller")
        Author.findOneAndUpdate({"quotes._id": req.params.quote_id}, 
        {$inc: {"quotes.$.votes":req.body.votes}}, {new:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    } 
}