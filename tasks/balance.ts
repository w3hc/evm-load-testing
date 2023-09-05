import { task } from "hardhat/config";
var msg = (require("cli-color")).xterm(39).bgXterm(128);

task("balance", "Check the current balance of a given wallet")
.addParam("wallet").setAction(

    async (taskArgs) => {
        const { wallet } = taskArgs;
        const bal = await ethers.provider.getBalance(wallet)
        console.log("Account", wallet, "holds", + msg(bal), "AA")
    }
);
