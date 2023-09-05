import { task } from "hardhat/config";
var msg = (require("cli-color")).xterm(39).bgXterm(128);

task("analyze", "Returns a TPS rate for a given timefreme")
.addParam("start", "When it started")
.addParam("end", "When it ended")
.setAction(

    async (taskArgs) => {

        const { start, end } = taskArgs;

        async function getTotalTransactionsBetweenBlocks(startBlock:number, endBlock:number) {
            try {
              let totalTransactions = 0;
          
              for (let blockNumber = startBlock; blockNumber <= endBlock; blockNumber++) {
                const block = await ethers.provider.getBlock(blockNumber);

                console.log('Total txns in block #'+blockNumber+':', block.transactions.length)
          
                if (block) {
                  totalTransactions += block.transactions.length;
                } else {
                  console.log(`Block ${blockNumber} not found.`);
                }
              }
          
              return totalTransactions;
            } catch (error) {
              console.error('Error:', error);
              return 0;
            }
        }

        async function getTimeDurationBetweenBlocks(startBlock:number, endBlock:number) {
        try {
            // Fetch the blocks
            const startBlockInfo = await ethers.provider.getBlock(startBlock);
            const endBlockInfo = await ethers.provider.getBlock(endBlock);

            if (!startBlockInfo || !endBlockInfo) {
            console.log('One or both blocks not found.');
            return;
            }

            // Calculate the time difference in seconds
            const startTime = startBlockInfo.timestamp;
            const endTime = endBlockInfo.timestamp;
            const timeDifferenceInSeconds = endTime - startTime;

            return timeDifferenceInSeconds;
        } catch (error) {
            console.error('Error:', error);
        }
        }

        // Specify the start and end block numbers
        const startBlock = Number(start); // Replace with the start block number
        const endBlock = Number(end);   // Replace with the end block number

        getTimeDurationBetweenBlocks(startBlock, endBlock)
        .then((timeDuration) => {
            if (timeDuration !== undefined) {
            console.log(`Time duration between blocks ${startBlock} and ${endBlock}: ${msg(timeDuration)} seconds\n`);
            }
        })
        .catch((err) => {
            console.error('Error:', err);
        });
        
        const numberOfTxs = await getTotalTransactionsBetweenBlocks(Number(start), Number(end))
        console.log('\nnumberOfTxs:', numberOfTxs)
        const duration = await getTimeDurationBetweenBlocks(Number(start), Number(end))
        console.log('duration:', duration)
        console.log('Average TPS rate:', msg((numberOfTxs / (duration || 0)).toFixed(2)))

    }
    
);