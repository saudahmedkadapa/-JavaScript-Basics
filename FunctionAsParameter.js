function add(a1, a2) {
    console.log(`addition= ${a1 + a2}`);
}

function execution(func)
{
    console.log("Inside execution...")
    func(10,20)

}

execution(add);