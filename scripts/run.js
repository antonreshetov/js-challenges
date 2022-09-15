const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')
const chalk = require('chalk')
const { execSync } = require('child_process')
const parseArgs = require('minimist')

const args = parseArgs(process.argv.slice(2))
const challenge = args._[0]

if (!challenge) {
  console.log('Please specify a challenge')
  process.exit(1)
}

const srcPath = path.resolve(__dirname, '../src')
const category = challenge.split('/')[0]
const number = challenge.split('/')[1]
const challengeCategoryPath = path.join(srcPath, category)
const allChallenges = fs.readdirSync(challengeCategoryPath)

const suffix = args.s ? '.solution.js' : '.challenge.js'
const challengeFileName = number + suffix

const isExist = !!allChallenges.find(i => i === challengeFileName)

if (!isExist) {
  console.log()
  console.log(chalk.yellow(`Challenge '${challenge}' not found`))
  console.log()
  process.exit(1)
}

const challengeFile = path.join(challengeCategoryPath, challengeFileName)

chokidar.watch(challengeFile).on('all', () => {
  try {
    console.clear()
    execSync(`vitest run "${challengeFile}"`, {
      stdio: 'inherit'
    })
    if (!args.s) {
      console.log(chalk.green('Challenge is done!'))
    }
    console.log()
    process.exit(1)
  } catch (err) {
    console.log(chalk.red('Challenge is failed. Try again.'))
    console.log()
  }
})
