var spawn = require('child_process').spawn;

// input
// ...
// ;

	var scraperapp = spawn("pytest", ['C:/Users/emre/Desktop/GithubOrdner/momi-1/ENV/momi-1/tests/scraper/test_ebookers.py']);

	scraperapp.stdout.on('data', function(data) {
		console.log(data.toString());
	});
	
	scraperapp.stderr.on('data', function(data) {
	  console.log('stderr: ' + data);
	});
	
	scraperapp.stdout.on('close', function() {
		console.log('\n\nDone!\n');
	});

	
	
	
