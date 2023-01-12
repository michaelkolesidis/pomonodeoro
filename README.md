# Pomonodeoro 🍅

A simple pomodoro timer for the terminal. Choose between a pomodoro, a short or a long break and get a system notification when the time is over. Works on Linux, macOS and Windows.


## Setup

First, you need to download and install [Node.js](https://nodejs.org/en/download/), as well as, install Yarn globally.

Then, clone or download the project, and while inside its main folder run the following command to build the pomonodeoro.js file containing the src.js file bundled with all the dependencies (no external dependencies)

```bash
yarn build
```

You might want to be able to run Pomonodeoro from the terminal, from anywhere in your system. To achieve that follow these steps:

1. Create a folder named _scripts_ (or anything you want) inside your home folder.
2. Add this line to the _basrc_ file located in your home folder:

```
export PATH=$PATH:~/scripts
```

3. Mode the pomonodeoro.sh to the _scripts_ folder and add your local path to the pomonodeoro.js file.
4. Now, you can run pomonodeoro from any path in your system by running:

```
pomonodeoro.sh
```

5. (optional) Rename the pomonodeoro.sh file to something simpler (ex. _pomodoro_) to be able to run Pomonodeoro writing a simpler command each time.

## How to Use
When you run Pomonodeoro you can choose one of the following options:

| Key             | Function                          |
| :-------------: |:----------------------------------|
| P               | Start new pomodoro (25 minutes)   |
| S               | Start new short break (5 minutes) |
| L               | Start new long break (20 minutes) |
| E               |  Exit                             |


## License

<a href="https://www.gnu.org/licenses/gpl-3.0.html"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/GPLv3_Logo.svg" height="100px" /></a>

Copyright (c) 2023 Michael Kolesidis<br>
Licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).


