# Electron-React App

Build simple electron-react app template,  use [electron-quick-start][1] and reactjs. Support hot reload

## Steps:
1. prepare nodejs environment

2. clone the project to your machine 
```git
git clone https://github.com/htobenothing/electron-react.git
```

3.  install the library
```git
npm install
``` 

4. run the project, the project use webpack-server to support the hot load function. 
    - at the first terminal set up webpack-server     
    ```node
    npm run watch
    ```
    - open a new terminal, run the codem, open electron app.
    ```node
    npm start
    ```


[1]:https://github.com/electron/electron-quick-start