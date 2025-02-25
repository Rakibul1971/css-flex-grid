function factorialImple( number ){
    if( number === 1){
        return 1;
    }
    return number * factorialImple( number -1);
}

let res = factorialImple(3);
console.log(res);
