function substraction(a,b)
{
    sum=a-b
    console.log(`substraction= ${sum}`);
}

function execution(p)
{
    console.log("inside execution")
    p(5,5)
}
execution(substraction)