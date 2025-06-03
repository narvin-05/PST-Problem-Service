const {StatusCodes} = require('http-status-codes');

const NotImplemented = require('../errors/notImplemented.error')
const BadRequest = require('../errors/badrequest.error');

function pingProblemController(req,res,next){
    res.json({message:"Problem controller is up and working"});
}

function addProblem(req,res,next){
    try {
        // nothing implemented
        throw new BadRequest('Problem Name', {missing: ["Problem Name"]});
    } catch(error) {
        next(error);
    }
}
function getProblem(req,res,next){
    try {
        throw new NotImplemented("addProblem")
   } catch (error) {
       next(errorHandler);
   }
} 

function getProblems(req,res,next){
    try {
        throw new NotImplemented("addProblem")
        
   } catch (error) {
       next(errorHandler);
   }
}

function deleteProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not implemented yet"
    })
}

function updateProblem(req,res,next){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
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