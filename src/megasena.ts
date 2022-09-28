let numSorteio: Array<number> = []; 

let mega =():Array<number> => {

    for(let i=0; i<6; i++){

        let num: number = Math.floor(Math.random() * 60);
        if(numSorteio.indexOf(num) == -1){
            numSorteio.push(num);
        }else{
            i--;
        }
       
 
    };

    return numSorteio;
};


