const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('How old are you?', (answer) => {
    if(parseInt(answer)>17){
        console.log('You are over 18');
    }
    else{
        console.log('You are under 18')
    }
    rl.close();
});