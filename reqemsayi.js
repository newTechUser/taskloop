var num = parseInt(prompt());
var say=0;
while (num!=0)
{
    num =(num - (num%10))/10;
    say++;
}
console.log(say);