import * as fs from 'fs';
import * as wallets from '../wallets.json'

async function main() {

  const initialWallets = {
    "0": {
        "address": "0xBAAe015b911929fA1Dd36961aA3871c9C36728E6",
        "privateKey": "0x903a4d76a032eee960e48986ba303e21239897cdc542882b2ed4aa4b7c89c508"
    }
  }

  
  const jsonContent = JSON.stringify(initialWallets, null, 2);
  fs.writeFileSync('wallets.json', jsonContent);

  const initialBlocks = {
    "start": "88888",
    "end": "88888"
  }
  
  const blocksJsonContent = JSON.stringify(initialBlocks, null, 2);
  fs.writeFileSync('blocks.json', blocksJsonContent);

  console.log('Reset ✅');
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});