let comentarioGit = "implementando committer"

let arquivosAlterados = [
    "amarelo",
    "azul",
    "vermelho",
    "branco",
    "preto",
    "magenta",
    "verde",
    "laranja"
]

let contagem = arquivosAlterados.length

if (contagem == 1) {

} else if (contagem == 2) {

} else if (contagem == 3) {

} else if (contagem == 4) {

} else if (contagem == 5) {

} else if (contagem == 6) {

} else if (contagem == 7) {

} else if (contagem == 8) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(11, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[10] + '"')
    arquivosAlterados.splice(13, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[12] + '"')
    arquivosAlterados.splice(15, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[14] + '"')
    arquivosAlterados.splice(18, 0, 'git push')
    arquivosAlterados.splice(19, 0, '')
}


for (let i = 0; i < arquivosAlterados; i++) {
    arquivosAlterados[i] = 'git add ' + '"' + arquivosAlterados[i] + '"'
}

for (let i = 0; i < arquivosAlterados.length; i++) {
    console.log(arquivosAlterados[i])
}

// git add "controllers/userController.js"
// git commit -m  "25. Adding User Profile Photos"
// git add "models/User.js"
// git commit -m  "25. Adding User Profile Photos"
// git add "package-lock.json"
// git commit -m  "25. Adding User Profile Photos"
// git add "package.json"
// git commit -m  "25. Adding User Profile Photos"
// git add "views/home-dashboard.ejs"
// git commit -m  "25. Adding User Profile Photos"
// git add "zgit.js"
// git commit -m  "25. Adding User Profile Photos"
// git push
