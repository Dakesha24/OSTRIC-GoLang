//for...of loop

const n = 6;
for(let i=1; i<=n; i++) {
    let bintang = ''
    for (let j=1;j<=i; j++) {
        bintang += '*';
    }
    console.log(bintang);
}
