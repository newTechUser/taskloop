var num = parseInt(prompt());
var say = 0;
for(var i=1;i<=num; i++)
{
    if (num % i == 0)
    {
        say++;
    }
}

if (say == 2)
{
    console.log("sadedir");
}
else if (say > 2)
{
    console.log("murekkeb");
}
else
{
    console.log("ne sadedir ne murekkeb");

}