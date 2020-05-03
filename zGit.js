
let comentarioGit = "Script para automatizar commits"

let arquivosAlterados = [
    "zGit.js"
]

if (arquivosAlterados.length == 1) {
    arquivosAlterados.splice(1, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git push')
    arquivosAlterados.splice(5, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    

} else if (arquivosAlterados.length == 2) {
    arquivosAlterados.splice(1, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git push')
    arquivosAlterados.splice(7, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';

} else if (arquivosAlterados.length == 3) {
    arquivosAlterados.splice(1, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git push')
    arquivosAlterados.splice(9, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';

} else if (arquivosAlterados.length == 4) {
    arquivosAlterados.splice(1, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git push')
    arquivosAlterados.splice(11, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';

} else if (arquivosAlterados.length == 5) {
    arquivosAlterados.splice(1, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(11, 0, 'git push')
    arquivosAlterados.splice(13, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';
    arquivosAlterados[8] = 'git add "' + arquivosAlterados[8] + '"';

} else if (arquivosAlterados.length == 6) {
    arquivosAlterados.splice(1, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(11, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[10] + '"')
    arquivosAlterados.splice(13, 0, 'git push')
    arquivosAlterados.splice(15, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';
    arquivosAlterados[8] = 'git add "' + arquivosAlterados[8] + '"';
    arquivosAlterados[10] = 'git add "' + arquivosAlterados[10] + '"';

} else if (arquivosAlterados.length == 7) {
    arquivosAlterados.splice(1, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(11, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[10] + '"')
    arquivosAlterados.splice(13, 0, 'git commit -m "' + comentarioGit + ' - ' + arquivosAlterados[12] + '"')
    arquivosAlterados.splice(15, 0, 'git push')
    arquivosAlterados.splice(17, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';
    arquivosAlterados[8] = 'git add "' + arquivosAlterados[8] + '"';
    arquivosAlterados[10] = 'git add "' + arquivosAlterados[10] + '"';
    arquivosAlterados[12] = 'git add "' + arquivosAlterados[12] + '"';
}

// for (var i = 0; i < arquivosAlterados.length; i++) {
//     if (i % 2 === 0) { // index is even
//         arquivosAlterados[i] = 'git add "' + arquivosAlterados[i] + '"';
//     }
// }

for (let i = 0; i < arquivosAlterados.length; i++) {
    console.log(arquivosAlterados[i])
}