let comentarioGit = "8. Performing a Lookup in MongoDB (Part 2) - concluindo parte que havia esquecido"

let arquivosAlterados = [
    // "views/includes/header.ejs",
    // "views/create-post.ejs",
    // "controllers/postController.js",
    // "views/404.ejs",
    // "package-lock.json",
    // "package.json",
    // "controllers/userController.js",
    // "router.js",
    "views/single-post-screen.ejs",
    "models/Post.js",
    "models/User.js",
    "zgit.js"
]

let contagem = arquivosAlterados.length

if (contagem == 1) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(2, 0, 'git push')
    arquivosAlterados.splice(3, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';

} else if (contagem == 2) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(4, 0, 'git push')
    arquivosAlterados.splice(5, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';

} else if (contagem == 3) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(6, 0, 'git push')
    arquivosAlterados.splice(7, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';

} else if (contagem == 4) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(8, 0, 'git push')
    arquivosAlterados.splice(9, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';

} else if (contagem == 5) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(10, 0, 'git push')
    arquivosAlterados.splice(11, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';
    arquivosAlterados[8] = 'git add "' + arquivosAlterados[8] + '"';


} else if (contagem == 6) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(11, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[10] + '"')
    arquivosAlterados.splice(12, 0, 'git push')
    arquivosAlterados.splice(13, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';
    arquivosAlterados[8] = 'git add "' + arquivosAlterados[8] + '"';
    arquivosAlterados[10] = 'git add "' + arquivosAlterados[10] + '"';

} else if (contagem == 7) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(11, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[10] + '"')
    arquivosAlterados.splice(13, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[12] + '"')
    arquivosAlterados.splice(14, 0, 'git push')
    arquivosAlterados.splice(15, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';
    arquivosAlterados[8] = 'git add "' + arquivosAlterados[8] + '"';
    arquivosAlterados[10] = 'git add "' + arquivosAlterados[10] + '"';
    arquivosAlterados[12] = 'git add "' + arquivosAlterados[12] + '"';
    

} else if (contagem == 8) {
    arquivosAlterados.splice(1, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[0] + '"')
    arquivosAlterados.splice(3, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[2] + '"')
    arquivosAlterados.splice(5, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[4] + '"')
    arquivosAlterados.splice(7, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[6] + '"')
    arquivosAlterados.splice(9, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[8] + '"')
    arquivosAlterados.splice(11, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[10] + '"')
    arquivosAlterados.splice(13, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[12] + '"')
    arquivosAlterados.splice(15, 0, 'git commit -m ' + '"' + comentarioGit + ' - ' + arquivosAlterados[14] + '"')
    arquivosAlterados.splice(16, 0, 'git push')
    arquivosAlterados.splice(17, 0, '')
    arquivosAlterados[0] = 'git add "' + arquivosAlterados[0] + '"';
    arquivosAlterados[2] = 'git add "' + arquivosAlterados[2] + '"';
    arquivosAlterados[4] = 'git add "' + arquivosAlterados[4] + '"';
    arquivosAlterados[6] = 'git add "' + arquivosAlterados[6] + '"';
    arquivosAlterados[8] = 'git add "' + arquivosAlterados[8] + '"';
    arquivosAlterados[10] = 'git add "' + arquivosAlterados[10] + '"';
    arquivosAlterados[12] = 'git add "' + arquivosAlterados[12] + '"';
    arquivosAlterados[14] = 'git add "' + arquivosAlterados[14] + '"';
}


/*
for (let i = 0; i < arquivosAlterados.length; i++) {
    if (arquivosAlterados[i] % 2 === 0) {
        arquivosAlterados[i] = "git add " + '"' + arquivosAlterados[i] + '"'
        arquivosAlterados.splice(arquivosAlterados[i], 0, "git add " + '"' + arquivosAlterados[i] + '"')
    }
}
*/

for (let i = 0; i < arquivosAlterados.length; i++) {
    console.log(arquivosAlterados[i])
}