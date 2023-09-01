var createCounter = function(n) {
    console.log(n)
    return ()=>{
        console.log(n);
        returnn=n+1;
    }
};
const counter=createCounter(10);
console.log(counter(),counter())