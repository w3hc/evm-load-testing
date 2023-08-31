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
    
            const basic = new ethers.Contract('0x1D3Ddc8A5A83ad20585129E3C7BE84B9363DC76F', basicAbi.abi, signer)
    
            const amount = ethers.parseEther('42')

            for(let i=0;i<300;i++) {
                const mint = await basic.mint(amount)
                console.log(msg(mint.hash))
            }    
        } catch(e) {
            console.log('error during run:', e)
        }
        
    }
);

