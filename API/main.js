//这是个主进程
var electron = require('electron')

var app = electron.app   
var BrowserWindow = electron.BrowserWindow

var mainWindow = null 

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width : 500 ,
        height : 500,
        webPreferences:{//这个还是不太理解，可以查一下资料
            nodeIntegration:true
        }
    })
    mainWindow.loadFile('index.html')  //加载html页面
    //改变菜单内容
    // require('./main/menu.js')
    mainWindow.on('closed',()=>{
        mainWindow = null
    })
})