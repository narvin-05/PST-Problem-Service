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
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
} 

function getProblems(req,res,next){
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

function deleteProblem(req,res,next){
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

function updateProblem(req,res,next){
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch(error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}