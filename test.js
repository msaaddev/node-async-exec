const asyncExec = require('./index');
const handleError = require('node-cli-handle-error');

(async () => {
	try {
		// executes a shell command asynchronously
		await asyncExec({ cmd: `touch example.md` });

		// changes directory and then run the shell command inside that directory
		await asyncExec({
			path: `/Users/saadirfan/GitHub`,
			cmd: `touch example.md`
		});
	} catch (err) {
		handleError(err);
	}
})();
