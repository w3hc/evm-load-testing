const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128);
import hre, { ethers, network } from 'hardhat'

async function main() {

    const block = await ethers.provider.getBlockNumber()
    console.log('\nCurrent block:', block)
    const time = new Date()
    console.log('\nCurrent time:', time)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});