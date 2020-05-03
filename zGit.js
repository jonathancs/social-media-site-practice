
let nomeDaAula = "20. Understanding Sessions"

let array1 = [
    "zGit.js"
]








































array1.splice(1, 0, 'git commit -m "' + nomeDaAula + ' - ' + array1[0] + '"')
array1.splice(3, 0, 'git commit -m "' + nomeDaAula + ' - ' + array1[2] + '"')
array1.splice(5, 0, 'git commit -m "' + nomeDaAula + ' - ' + array1[4] + '"')
array1.splice(7, 0, 'git commit -m "' + nomeDaAula + ' - ' + array1[6] + '"')
array1.splice(9, 0, 'git commit -m "' + nomeDaAula + ' - ' + array1[8] + '"')
array1.splice(11, 0, 'git push')

for (var i = 0; i < array1.length; i++) {
    if(i % 2 === 0) { // index is even
        array1[i] = 'git add "' + array1[i] + '"';
    }
}

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i])    
}