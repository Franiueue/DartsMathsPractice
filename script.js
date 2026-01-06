let box1 = document.querySelector('.one');
let box2 = document.querySelector('.two');
let box3 = document.querySelector('.three');

let text = document.getElementById('answerText');
let redGreen = document.querySelector('.redGreen');

let value1 = 0;
let value2 = 0;
let value3 = 0;

let valueTD1 = 0;
let valueTD2 = 0;
let valueTD3 = 0;

let tablicaTD = ["","",""];
let tablicaWyniki = [0,0,0];

let sumaI = 0;
let count = 0;
let correct = 0;
let srednia = 0;

function pickRandom() {
    const values = [...Array(20).keys()].map(x => x + 1);
    values.push(25);
    
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}

function suma(TD1, TD2, TD3, one, two, three){
    sumaI = 0;
    switch(TD1) {
        case "T":
            sumaI+=one*3;
            break;
            case "D":
                sumaI+=one*2;
                break;
                case "":
                    sumaI+=one;
                    break;
                }

                switch(TD2) {
                    case "T":
                        sumaI+=two*3;
                        break;
                        case "D":
                            sumaI+=two*2;
                            break;
                            case "":
                                sumaI+=two;
                                break;
                            }
                            
                            switch(TD3) {
                                case "T":
                                    sumaI+=three*3;
            break;
            case "D":
                sumaI+=three*2;
            break;
            case "":
                sumaI+=three;
                break;
            }
            
            return sumaI;
            
        }
        
        function sprawdz(suma){
            count++;
            if(suma == text.value)
            {
                //console.log("123");
                redGreen.style.backgroundColor = "green";
                correct++;
            }
            else{
                //console.log("fdwaf")
                redGreen.style.backgroundColor = "red";
            }
            //console.log(suma);
        }
        let average = document.querySelector('.average');
        let outOf = document.querySelector('.outOf');
        function stats(){
            average.textContent = "Your precentage of being correct is: "+(correct/count)*100+"%";
            outOf.textContent = "Correct: "+correct+"/"+count;
        }
        
function refresh(){
    sprawdz(suma(tablicaTD[0], tablicaTD[1], tablicaTD[2], value1, value2, value3));
    
    value1 = pickRandom();
    value2 = pickRandom();
    value3 = pickRandom();
    
    valueTD1 = Math.random();
    valueTD2 = Math.random();
    valueTD3 = Math.random();
    
    if(valueTD1 <= 0.2) tablicaTD[0] = "D"
    else if(valueTD1<= 0.4 && valueTD1 > 0.2 && value1 !=25) tablicaTD[0] = "T"
    else tablicaTD[0] = "";
    
    if(valueTD2 <= 0.2) tablicaTD[1] = "D"
    else if(valueTD2<= 0.4 && valueTD2 > 0.2 && value2 !=25) tablicaTD[1] = "T"
    else tablicaTD[1] = "";
    
    if(valueTD3 <= 0.2) tablicaTD[2] = "D"
    else if(valueTD3<= 0.4 && valueTD3 > 0.2 && value3 !=25) tablicaTD[2] = "T"
    else tablicaTD[2] = "";
    
    box1.textContent = tablicaTD[0]+value1;
    box2.textContent = tablicaTD[1]+value2;
    box3.textContent = tablicaTD[2]+value3;
    
    //console.log(tablicaTD[0]);
    stats();
    
}


let enter = document.addEventListener('keypress' , (e)=>{
    if(e.key === "Enter")
    {
        refresh();
        
        //console.log(pickRandom());
        
    }
})



