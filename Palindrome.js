function palindrome()
{
    let name="mom"
    let rev=""
    for(let i=name.length-1;i>=0;i--)
    {
        rev=rev+name.charAt(i);
    }
    console.log("rev="+rev)
    if(name==rev)
    {
        console.log("Palindorme")
    }
    else{
        console.log("not a palindorme..")
    }
}

palindrome()