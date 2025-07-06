/// Print this pattern 

// 1
// 1 0
// 1 0 1
// 1 0 1 0

function printstarpattern() {
    let n = 5; 
    for (let i = 0; i < n; i++) {
        let row = ''; let toggle = 1
        for (let j = 0; j < i + 1; j++) {
            //console.log(i, j, n - (i + 1))
            row = row + toggle;
            if (toggle === 1) {
                    toggle = 0
            } else if(toggle === 0 ){
                    toggle = 1
                }
            
        }
        console.log(row)
    }
    
}
printstarpattern();
