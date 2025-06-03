const express = require('express');
const problemRouter = express.Router();
const {problemController} = require('../../controllers');

problemRouter.get('/ping',problemController.pingProblemController);  

problemRouter.get('/:id',problemController.getProblem);
problemRouter.get('/',problemController.getProblems);
problemRouter.post('/',problemController.addProblem);
problemRouter.delete('/:id',problemController.deleteProblem);
problemRouter.put('/:id',problemController.updateProblem);


module.exports = problemRouter;
