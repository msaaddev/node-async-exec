const execAsync = require('./index');
const handleError = require('node-cli-handle-error');

(async () => {
	try {
		// executes a shell command asynchronously
		await execAsync({ cmd: `touch abc.md` });

		// changes directory and then run the shell command inside that directory
		await execAsync({
			path: `/Users/saadirfan/Desktop`,
			cmd: `touch example.md`
		});

		// change directory and run a bunch of commands
		const commands = [
			`mkdir saad`,
			`npm install`,
			`npm install --only=dev`
		];
		await execAsync({
			path: `/Users/saadirfan/Desktop/example`,
			cmd: commands
		});

		console.log(`Will execute after commands...`);
	} catch (err) {
		handleError(err);
	}
})();
