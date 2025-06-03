function pingProblemController(req,res,next){
    res.json({message:"Problem controller is up and working"});
}

function addProblem(req,res,next){
    return res.status(501).json({
        message:"Not implemented yet"
    })
}

function getProblem(req,res,next){
    return res.status(501).json({
        message:"Not implemented yet"
    })
} 

function getProblems(req,res,next){
    return res.status(501).json({
        message:"Not implemented yet"
    })
}

function deleteProblem(req,res,next){
    return res.status(501).json({
        message:"Not implemented yet"
    })
}

function updateProblem(req,res,next){
    return res.status(501).json({
        message:"Not implemented yet"
    })
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}