const execAsync = require('./index');
const handleError = require('node-cli-handle-error');

(async () => {
	try {
		// executes a shell command asynchronously
		await execAsync({ cmd: `touch abc.md` });

		// changes directory and then run the shell command inside that directory
		await execAsync({
			path: `/Users/saadirfan/GitHub`,
			cmd: `touch example.md`
		});

		// change directory and run a bunch of commands
		const commands = [`touch example.js`, `touch example.md`];
		await execAsync({
			path: `/Users/saadirfan/GitHub`,
			cmd: commands
		});
	} catch (err) {
		handleError(err);
	}
})();
