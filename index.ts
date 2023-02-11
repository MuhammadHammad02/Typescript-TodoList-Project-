#!/usr/bin/env node

import inquirer from "inquirer";

interface Answer{
    tudo: string,
    addmore: boolean
}

const tudos: string[] = []
let addMore: Boolean = true;
while(addMore){
    const answers: Answer = await inquirer.prompt([
        {
        type: "string",
        name: "tudo",
        message: "What will you focus on today?"
    },
    {
        type: "confirm",
        name: "addmore",
        message: "What will you focus on today?",
        default: false
    }
])

const {tudo, addmore} = answers;
addMore = addmore;
if(answers.tudo){
    tudos.push(tudo);
}
else{
    console.log("Kindly write what you focus")

}

}
if(tudos.length > 0) {
    console.info("Your tudo is: ")
    tudos.forEach((t) => console.info(t))
}
else{
    console.info("No tudos in list.")
}