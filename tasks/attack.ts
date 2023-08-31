import { task } from "hardhat/config";
var msg = (require("cli-color")).xterm(39).bgXterm(128);
import run  from "../scripts/run"

task("attack", "Send many txs in parallel")
.addParam("force").setAction(

    async (arg1) => {

        const [master] = await ethers.getSigners()

        console.log("Generating and funding new account...")

        for(let i=0;i<Number(arg1.force);i++) {

            const newAccount = ethers.Wallet.createRandom()
            console.log("Public address:", newAccount.address, "-> Private key: " + msg(newAccount.privateKey))
            const signer = newAccount.connect(ethers.provider);

            const amount = ethers.parseEther("0.0006")
            const fundWallet = await master.sendTransaction({
                to: newAccount.address,
                value: amount
            });

            await fundWallet.wait(1)
            await run(signer, "0x1D3Ddc8A5A83ad20585129E3C7BE84B9363DC76F")

        }
        
    }
);

