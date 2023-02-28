//for Of loop and  for In loop

const names =["Youtube","facebook","amazon","Instagram","Netflix"];

for(const n of names){
   // console.log(n);
}

//for in loop 
const symbols = {
    yt : "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline"
}

for(const n in symbols){
    //for printing keys
    //console.log(n);
    //for printing values 
     //console.log(symbols[n]);
     //for printing kay and values
    console.log(`key is :${n} ,value is: ${symbols[n]}`);
}