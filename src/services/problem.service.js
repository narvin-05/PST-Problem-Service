const sanitizeMarkdownContent = require("../utils/markdownSanitizer");
// const {problemRepository} = require("../repositories");


class problemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
            // 1. Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);
        

            console.log("Problem Data ->", problemData);
            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
        }

    async getAllProblems(){
            const problems = await this.problemRepository.getAllProblems();;
            return problems;
    }

    async getProblem(problemId){
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

}

module.exports = problemService;