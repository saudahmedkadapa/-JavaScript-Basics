// function reverse(str)
// {
//     return str.split("").reverse().join("");

// }

// let originalString="saud"
// let rev=reverse(originalString);
// console.log(rev)


function reverse(str)
{
    let reverse="";
    for(let i=str.length-1;i>=0;i--)
    {
        reverse+=str[i];
    }
    return reverse;
}

let originalString="Saud";
let reverseString=reverse(originalString);
console.log(reverseString);