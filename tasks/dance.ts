var msg = (require("cli-color")).xterm(39).bgXterm(128);
import { task } from "hardhat/config";
import * as wallets from '../wallets.json'
import fs from 'fs'

type Wallets = {
    [key: string]: { address: string; privateKey: string };
  };

task("dance", "Keep on running")
.addParam("wallet").setAction(

    async (arg1) => {
        let signer
        try {
            const walletNumber: keyof typeof wallets= arg1.wallet
            const spacialWallet = new ethers.Wallet(wallets[walletNumber].privateKey);
            signer = spacialWallet.connect(ethers.provider);
            const Basic = await ethers.getContractFactory('Basic')
            const basic = new ethers.Contract('0xFaF6278e15994710a98ef4E4106156B8b413fA17', Basic.interface, signer)
            const amount = ethers.parseEther('42')
            const recordInitialBlock = await ethers.provider.getBlockNumber() 

            for(let i=0;i<300;i++) {

                // const mint = await basic.mint(amount)
                // console.log(msg(mint.hash))

                const amountSimple = ethers.parseEther("0.000000000000000008")
                const simpleTransfer = await signer.sendTransaction({
                    to: "0x933562029fb046A72851F72a44309B7D51fF5946",
                    value: amountSimple
                });
                console.log(msg(simpleTransfer.hash))

                // console.log('balance:', await ethers.provider.getBalance(signer.address))
                // const erc20Transfer = await basic.transfer(signer.address, ethers.parseEther('1'))
                // console.log(msg(erc20Transfer.hash))

            }
            const recordLastBlock = await ethers.provider.getBlockNumber() 

            const writeBlocks = {
                "start": Number(recordInitialBlock),
                "end": Number(recordLastBlock)
            }
              
            const blocksJsonContent2 = JSON.stringify(writeBlocks, null, 2);
            fs.writeFileSync('blocks.json', blocksJsonContent2);

        } catch(e) {
            console.log(signer.address, 'has no funds')
        }
        
    }
);

