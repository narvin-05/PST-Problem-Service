const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
}))
// The below transport configuration enables logging in mongodb database
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    format: winston.format.combine(
        // 1st argument to the combine method - how timestamp should come
        winston.format.timestamp({
            format:'YYYY-MM-DD HH-mm-ss'
        }),
        // 2nd Argument to the combine method - what exactly is going to be printed in logs
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}] ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;