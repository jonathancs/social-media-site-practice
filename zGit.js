// automate the commits attempt 1 - 2/5/20

let array1 = [
    "caixa",
    "amarela",
    "usada"
]

for (var i=0; i < array1.length; i++) {
    array1[i] = 'git add "' + array1[i] + '"';
}

array1.splice(1, 0, 'git commit -m "nome da aula - ' + array1[0])
array1.splice(3, 0, 'git commit -m "nome da aula - ' + array1[2])
array1.splice(5, 0, 'git commit -m "nome da aula - ' + array1[4])

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i])    
}

array1.splice(1, 0, 'git commit -m "nome da aula - ${nome do arquivo}"')



/*

git add ".gitignore"
git commit -m "20. Understanding Sessions"

git add "db.js"
git commit -m "20. Understanding Sessions"

git add "models/User.js"
git commit -m "20. Understanding Sessions"

git add "app.js"
git commit -m "20. Understanding Sessions"

git add "controllers/userController.js"
git commit -m "20. Understanding Sessions"

git add "zGit"
git commit -m "20. Understanding Sessions"

git add "package-lock.json"
git commit -m "20. Understanding Sessions"

git add "package.json"
git commit -m "20. Understanding Sessions"

git push

*/