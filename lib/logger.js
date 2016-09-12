var log4js = require('log4js');

module.exports={
	init: function(app){
		log4js.configure({
		  appenders: [
		    { type: 'console' },{
		      type: 'file', 
		      filename: 'logs/access.log', 
		      maxLogSize: 4096000, //3m
		      backups:4,
		      category: 'normal' 
		    }
		  ],
		  replaceConsole: true
		});

		var logger = log4js.getLogger('normal');
		logger.setLevel('INFO');



		return new Promise(function(resolve, reject){
			app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO, format:':method :url'}));
			resolve();	
		})
		
	},

	logger: function(name){
	  var logger = log4js.getLogger(name);
	  return logger;
	}
}







