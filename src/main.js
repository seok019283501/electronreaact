const { app, BrowserWindow,Menu } = require('electron'); 
const path = require('path'); 
function createWindow () { 
    const win = new BrowserWindow({ 
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: { 
        preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadURL('http://localhost:3000'); 
};
const template = [
    {
        label:'File',
        submenu:[
            {
                label : "open"
            },
            {
                role:'toggleDevTools'
            }
        ]
    }
]
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
    app.whenReady().then(() => { 
    createWindow(); 
});
app.on('window-all-closed', function () { 
    if (process.platform !== 'darwin') app.quit(); 
});
