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
        try {
            const abiDir = '../evm-load-testing/artifacts/contracts';
            const basicAbiData = abiDir + "/" + "Basic.sol" + "/" + "Basic" + ".json"  
            let basicAbi;
            try {
                basicAbi = JSON.parse(fs.readFileSync(basicAbiData, {encoding:'utf8', flag:'r'}));
            } catch (error) {
                console.log(error)
                return;
            }

            const walletNumber: keyof typeof wallets= arg1.wallet

            const spacialWallet = new ethers.Wallet(wallets[walletNumber].privateKey);
            const signer = spacialWallet.connect(ethers.provider);
    
            const basic = new ethers.Contract('0xFaF6278e15994710a98ef4E4106156B8b413fA17', basicAbi.abi, signer)
    
            const amount = ethers.parseEther('42')

            for(let i=0;i<300;i++) {
                // console.log("signer address:", signer.address)
                const mint = await basic.mint(amount)
                console.log(msg(mint.hash))

                // const amountSimple = ethers.parseEther("0.000000000000000008")
                // const simpleTransfer = await signer.sendTransaction({
                //     to: signer.address,
                //     value: amountSimple, 
                //     // gasLimit: 420000,
                //     // gasPrice: 2100000

                // });
                // console.log(msg(simpleTransfer.hash))
                // console.log('balance:', await ethers.provider.getBalance(signer.address))

                // const erc20Transfer = await basic.transfer(signer.address, ethers.parseEther('1'))
                // console.log(msg(erc20Transfer.hash))
            }    
        } catch(e) {
            console.log('error during run:', e)
        }
        
    }
);

