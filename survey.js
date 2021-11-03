

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const outPut = {}

rl.question('what is your name? Nicknames are also acceptable :-) ', (answer1) => {
    outPut.name= answer1
    rl.question('what is an activity you like doing?  ', (answer2) => {
        outPut.activity = answer2
        rl.question('what do you listen to while doing that? ', (answer3) => {
            outPut.listen = answer3
            rl.question('which meal is your favorite(eg: dinner, brunch,etc.) ', (answer4) => {
                outPut.favourite = answer4
                rl.question('what is your favourite thing to eat for that meal? ', (answer5) => {
                    outPut.favouriteThing = answer5
                    rl.question('which sport is your absolute favourite?', (answer6) => {
                        outPut.absoluteFavourite = answer6
    
        console.log(outPut);
        rl.close();

                    })
                })
            })
        })
    })                 

});