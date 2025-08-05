const aiSerivce = require("../services/ai.services")

module.exports.getReview = async (req,res) => {
    const code = req.body.code;

    if(!code){
        return res.status(400).send("Prompt is required")
    }

    const response =await aiSerivce(code);
    res.send(response);
}

