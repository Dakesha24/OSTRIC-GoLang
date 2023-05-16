//Looping while

const n=6;
let i=0;
while(i<n){
    let bintang='';
    let j=0;
    
    while(j<i){
        bintang+= '*';
        j++;
    }
    console.log(bintang);
    i++
}
