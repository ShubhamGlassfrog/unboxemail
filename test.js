let min = 0;
let A = Array.from(new Set([-1,3,2,3,5,4,2,1])).filter(v => true? v>0 : false).sort().map((v,i) => {
    console.log({v,i})
    if(v != i+1) {
        min = i+1
    }
    return v;
});

if(min) {
    console.log(min)
}else{
    console.log(A.length+1)
}

