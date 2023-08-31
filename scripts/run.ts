var msg = (require("cli-color")).xterm(39).bgXterm(128);
import fs from 'fs'

export default async function run(signer:any, contractAddress:string) {

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
        const basic = new ethers.Contract(contractAddress, basicAbi.abi, signer)

        // Getting a "ProviderError: already known" if number of loops is 2
        for(let i=0;i<1;i++) {

            const amount = ethers.parseEther('0.00000001')
            const [master] = await ethers.getSigners()

            const tx = await signer.sendTransaction({
                to: signer.address,
                value: 1
            });

            console.log('\ntx:', msg(tx.hash))
            console.log('hello2')
        }
    } catch(e) {
        console.log('error during run:', e)
    }
    return true
}