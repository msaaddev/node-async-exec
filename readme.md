# 🎲 node-async-exec

![version](https://img.shields.io/npm/v/node-async-exec?color=%2FD566)
![downloads](https://img.shields.io/npm/dt/node-async-exec?color=2FD566)
![license](https://img.shields.io/npm/l/node-async-exec?color=2FD566)

A package that runs exec command asynchronously and also changes directory if needed to run commands.

## Features

- Asynchronously run a shell command.
- Run a shell command/commands inside a specific directory.
- Uses [exec node method](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback) and [process.chdir](https://nodejs.org/api/process.html#process_process_chdir_directory) under the hood.
- Can be used to build CLI and Node.js based tools.

<br>

<img src="./assets/suitcase.png" width="10%" />

## Install

```sh
# install the package
npm install node-async-exec
```

<br>

<img src="./assets/rocket.png" width="10%" />

## Usage

- Run a shell command

```js
const exec = require('node-async-exec');

(async () => {
	try {
		await exec({ cmd: `touch example.md` })
	} catch (err) {
		console.log(err);
	}
})()
```

- Change directory and run a command inside of it

```js
const exec = require('node-async-exec');

(async () => {
	try {
		await exec({
			path: `/Users/saadirfan/GitHub`,
			cmd: `touch example.md`
		})
	} catch (err) {
		console.log(err);
	}
})()
```

- Change directory and run a number of shell command inside that directory

```js
const exec = require('node-async-exec');

(async () => {
	try {
		const commands = [`git init`, `touch example.md`];
		await exec({
			path: `/Users/saadirfan/GitHub`,
			cmd: commands
		})
	} catch (err) {
		console.log(err);
	}
})()
```

## 🔑 License & Conduct

- MIT © [Saad Irfan](https://github.com/msaaddev)
- [Code of Conduct](https://github.com/msaaddev/node-async-exec/blob/master/code-of-conduct.md)
