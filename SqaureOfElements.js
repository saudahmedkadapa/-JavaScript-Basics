function Square() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sq = [];
    
    for (let i = 0; i < arr.length; i++) {
        let square = arr[i] * arr[i];
        sq.push(square);
    }
    
    console.log("Original array:", arr);
    console.log("Squared array:", sq);
}

Square();
