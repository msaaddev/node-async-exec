/**
 *
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const { exec } = require('child_process');
const handleError = require('node-cli-handle-error');

/**
 *
 *
 * @param {cmd} - commands to run
 * @returns {Promise} - a promise that runs the command
 */
async function promise(cmd) {
	return new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				handleError(error);
				reject();
			}
			const returnValue = { stdout, stderr };
			resolve(returnValue);
		});
	});
}

module.exports = async (opt = {}) => {
	const defaultOptions = {
		path: ``,
		cmd: ``,
		returnStdout: false,
		returnStderr: false,
	};

	const options = { ...defaultOptions, ...opt };

	const { path, cmd, returnStderr, returnStdout } = options;

	let returnValue = {
		stdout: [],
		stderr: [],
	};

	// changes directory if a path exists
	path !== `` ? process.chdir(path) : null;

	// checks if there is one command or array of commands
	if (typeof cmd !== 'object') {
		const output = await promise(cmd);
		returnValue.stderr = returnStderr ? output.stderr : [];
		returnValue.stdout = returnStdout ? output.stdout : [];
		return Promise.resolve(returnValue);
	} else {
		for (let i = 0; i < cmd.length; i++) {
			const output = await promise(cmd[i]);
			if (returnStderr) {
				returnValue.stderr.push(output.stderr);
			}
			if (returnStdout) {
				returnValue.stdout.push(output.stdout);
			}
			let j = i + 1;
			if (j === cmd.length) {
				return Promise.resolve(returnValue);
			}
		}
	}
};
