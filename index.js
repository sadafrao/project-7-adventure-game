#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("=============================="));
console.log(chalk.red.bold("well come to world war adventure game "));
console.log(chalk.blue("=============================="));
let country = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        message: "Select Your country from where you can play",
        choices: ["pakistan", "china", "India", "America"],
    }
]);
console.log("================================Loading===============================");
console.log("start game");
let task = await inquirer.prompt([
    {
        name: "option",
        type: "list",
        message: "Select your task ",
        choices: ["Level 1", "Level 2"]
    }
]);
if (task.option === "Level 1") {
    let ask = await inquirer.prompt([
        {
            name: "weapons",
            type: "list",
            message: "select your weapons",
            choices: ["Sword", "Gun", "Bomb", "sniper"]
        },
    ]);
}
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "PLease Enter Your Name:"
});
console.log("start your war");
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Opponent(enemy)",
    choices: ["American", "Indians", "Israel"]
});
let p1 = new Player(player.name);
let o1 = new Player(opponent.select);
do {
    // Skeleton
    if (opponent.select == "American") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Defend", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion fuel is${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
    }
    // Assassin
    if (opponent.select == "Indians") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion fuel is${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
    }
    // Zombie
    if (opponent.select == "Israel") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your Opponent",
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion fuel is${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
    }
} while (true);
