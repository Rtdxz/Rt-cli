#!/usr/bin/env node
const program = require('commander')
program.version(require('../package.json').version)

program 
    .command('init <name>')
    .description('init project ')
    .action(name =>{
        console.log('🥳完成添加' + name)
    })

program.parse(process.argv)