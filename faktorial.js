var num = parseInt(prompt());
var faktorial=1;

while(num!=0)
    {
        faktorial *= num;
        num -= 1;
    }

console.log(faktorial);