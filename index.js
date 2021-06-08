/**
 *
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const { exec } = require('child_process');
const handleError = require('node-cli-handle-error');

module.exports = async (opt = {}) => {
	const defaultOptions = {
		path: ``,
		cmd: ``
	};

	const options = { ...defaultOptions, ...opt };

	const { path, cmd } = options;

	// changes directory if a path exists
	path !== `` ? process.chdir(path) : null;

	// runs exec function asynchronously
	const execPromise = new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				handleError(error);
				reject();
			}
			resolve();
		});
	});

	return execPromise;
};
