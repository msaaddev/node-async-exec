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
			resolve();
		});
	});
}

module.exports = async (opt = {}) => {
	const defaultOptions = {
		path: ``,
		cmd: ``
	};

	const options = { ...defaultOptions, ...opt };

	const { path, cmd } = options;

	// changes directory if a path exists
	path !== `` ? process.chdir(path) : null;

	// checks if there is one command or array of commands
	if (typeof cmd !== 'object') {
		return promise(cmd);
	} else {
		for (let i = 0; i < cmd.length; i++) {
			await promise(cmd[i]);

			let j = i + 1;
			if (j === cmd.length) {
				return new Promise((resolve, reject) => {
					resolve();
				});
			}
		}
	}
};
