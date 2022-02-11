/**
 * 清除当前目录下所有文件夹下的node_modules文件夹
 */
const fs = require('fs');
const path = require('path');

// 删除文件夹
function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      const curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); // 递归删除文件夹
      } else {
        console.log('del file path: ', curPath)
        try {
          fs.unlinkSync(curPath); // 删除文件
        } catch (err) {
          console.log('del file path err: ', err)
        }
      }
    });
    // console.log('del path: ', path)
    fs.rmdirSync(path);
  }
};



// 1. 获取当前文件夹下所有文件夹的名称
let dirs = fs.readdirSync('./')
// console.log('dirs', dirs)

// 2. 循环获取node_modules文件夹
dirs.forEach((dir, index) => {
  const curPath = './' + dir + '/node_modules';
  if (fs.existsSync(curPath) &&  fs.statSync(curPath).isDirectory()) {
    
    console.log('curPath', curPath)

    delDir(curPath); // 递归删除文件夹
  }
});
