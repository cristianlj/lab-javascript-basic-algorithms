console.log("I'm ready!");

var hacker1 = 'Cristian';

console.log(`The driver's name is ${hacker1}`);

var hacker2 = 'Victor';

console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length)
{
  console.log(`The Driver has the longest name, it has ${hacker1.length}  characters`)
}
else if(hacker1.length < hacker2.length){
 console.log (`Yo, navigator got the longest name, it has ${hacker2.length} characters`)
}
else {
 console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`)
}

console.log(hacker1.toLocaleUpperCase().split('').join(' '));


let reverseName = hacker2.split('').reverse();
console.log(reverseName.join(''));


let compare =  hacker1.localeCompare(hacker2);
console.log(compare);
