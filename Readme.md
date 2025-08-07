# Learning backed form this project

Learning this from chai aur backend series

1. we have added .gitkeep file to push empty folder to git
2. used gitignore generator
3. used type: module in package file to use import statement thoughout the project
4. used one pachage called nodemon npm as it restart the serve for any changes avoid the manaual restart and add in package.json 
"scripts": {
    "dev": "nodemon src/index.js"
  }
5. used one package called prettier as it is used to the code similar for whole team to avoid git merge issues then:  
- add prettierrc file to define standard or what we need to implement in our files  
- add prettieringore to define file where our prettier will not get implemented 
