import { task } from "hardhat/config";
var msg = (require("cli-color")).xterm(39).bgXterm(128);
import fs from 'fs'
import * as wallets from '../wallets.json'

task("fund", "Creates and funds as many wallets as you want")
.addParam("num").setAction(

    async (arg1) => {

        const [master] = await ethers.getSigners()

        console.log("Creating and funding new accounts...")

        let newAccount
        for(let i=0;i<Number(arg1.num);i++) {

            newAccount = ethers.Wallet.createRandom()
            console.log("Public address:", newAccount.address, "-> Private key: " + msg(newAccount.privateKey))

            const amount = ethers.parseEther("0.01")
            const fundWallet = await master.sendTransaction({
                to: newAccount.address,
                value: amount
            });

            const walletsData = wallets
            const newEntry = (i+1).toString()
            
            // @ts-ignore
            walletsData[newEntry] = {
                "address": newAccount.address,
                "privateKey": newAccount.privateKey
            };
  
            const walletsJSON = JSON.stringify(walletsData, null, 2)
            
            try {
                fs.writeFileSync('wallets.json', walletsJSON)
            } catch (e) {
                console.error('Error updating wallets.json:', e)
            }


        }
        const amount = ethers.parseEther("0.01")
            const fundWallet = await master.sendTransaction({
                to: newAccount.address,
                value: amount
            });
        await fundWallet.wait(1)
        
    }
);

