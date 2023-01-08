/**
 * Pomonodeoro
 * Copyright (c) 2023 Michael Kolesidis
 * GNU General Public License v3.0
 */

const readline = require("readline");
const notifier = require("node-notifier");

process.stdout.write("\x1b[31mPomonodeoro\nv.0.0.1 \x1b[0m\n\n");

function timer(totalTime) {
  let type;
  switch (totalTime) {
    case 25:
      type = "Pomodoro";
      break;
    case 20:
      type = "Long Break";
      break;
    case 5:
      type = "Short Break";
      break;
  }
  process.stdout.write(`\n${type}\n`);

  let time = totalTime * 60;
  let minutes, seconds;

  setInterval(() => {
    minutes = Math.floor(time / 60);

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    seconds = time - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    process.stdout.write(`\x1b[30m\x1b[47m${minutes} : ${seconds} \x1b[0m \r`);
    time -= 1;

    if (time === -1) {
      if (type === "Pomodoro") {
        process.stdout.write("Congratulations you finished a pomodoro!\n");
        notifier.notify({
          title: "Pomonodeoro",
          message: "Congratulations you finished a pomodoro!",
        });
        process.exit();
      } else {
        notifier.notify({
          title: "Pomonodeoro",
          message: "The break is over!",
        });
        process.stdout.write("The break is over!\n");
        process.exit();
      }
    }
  }, 1000);
}

function readInput() {
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    interface.question(
      `Please choose an option:
[P] - Start new pomodoro (25 minutes)
[S] - Start new short break (5 minutes)
[L] - Start new long break (20 minutes)
[E] - Exit\n`,
      (answer) => {
        interface.close();
        resolve(answer);
      }
    )
  );
}

(async () => {
  let answer = await readInput();
  answer = answer.toUpperCase();

  switch (answer) {
    case "P":
      timer(25);
      break;
    case "S":
      timer(5);
      break;
    case "L":
      timer(20);
      break;
    case "E":
      process.exit();
  }
})();
