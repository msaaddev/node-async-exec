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
	} catch (err) {
		handleError(err);
	}
})();
