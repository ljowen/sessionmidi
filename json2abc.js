const tunes = require('./tunes.json');
const fs = require('fs');

tunesABC = tunes.map(tune => tune.abc);

tunes.forEach(tune => {
	fs.writeFile(
		"tunes/"+tune.name.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
		`X:1 \r\n` +
		`T:${tune.name} \r\n` +
		`R:${tune.type} \r\n` +
		`M:${tune.meter} \r\n` +
		`K:${tune.mode} \r\n` 
		+tune.abc,
		(err) => {
			if (err) 
				console.error(err);
		}
	)	
	//console.log(abc);
})

console.log(tunes);
