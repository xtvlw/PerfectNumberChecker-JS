//_[N_F]_
const test = (number) => {
    let select = []
    let result = 0
    for(i=1;i<number;i++){
        if(number%i == 0){
            select.push(i)
        }
    }for(i=0;i<select.length;i++){
        result += select[i]
    }if(result !== number || number == 0){
        console.log(`${number} is not perfect`)
    }else{
        console.log(`${number} is perfect`)
    }
}
test(6)