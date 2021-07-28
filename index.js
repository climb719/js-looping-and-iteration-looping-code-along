// Code your solutions in this file
function writeCards(names, event) {
    let thanksArray = []
    for (let i= 0; i < names.length; i++) {
    thanksArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return thanksArray
}

function countDown(num) {
   while (num > -1)
   console.log(num--)
}

