#! /usr/bin/env node

//函数promise化
const {promisify} = require ('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')
module.exports = async name =>{
    clear()
    const data = await figlet('rt cli','Ghost')
    log(data)

    //clone
    log(`🛴创建项目 ${name}`)
    await clone(`github:Rtdxz/front-tpl`, name)
}
