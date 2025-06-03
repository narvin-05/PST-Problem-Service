function pingProblemController(req,res,next){
    res.send({message:"Problem controller is up and working"});
}

function addProblem(req,res,next){

}

function getProblem(req,res,next){

} 

function getProblems(req,res,next){

}

function deleteProblem(req,res,next){

}

function updateProblem(req,res,next){

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}