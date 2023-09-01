# EVM Load Testing

The app creates new wallets, funds them, then run the `dance.ts` task. 

## Install

If you don't have pnpm installed on your machine, [here's what you should do](https://pnpm.io/installation). Same for [TypeScript](https://www.typescriptlang.org/download), or [Node.js](https://nodejs.org/en/download/current) if you don't have these installed yet. 

And if you don't want to install these things at all, you always can use Github Codespace so you can use this app directly in your browser.

```
pnpm install
```

Create a `.env` file:

```
cp .env.template .env
```

Add your own keys in the `.env` file. 

## Test 

```
pnpm test
```

## Deploy 

If you want to use your own instance, you can:

```
pnpm basic
```

Then copy-paste the contract address in the `dance.ts` task.

## Run

```
./attack.sh 42
```

Then, put the `wallets.json` file back to its initial state: 

```
pnpm reset
```

## Analyze

```
pnpm analyze --start 888888 --end 888888
```

## Versions

- Node [v18.17.1](https://nodejs.org/uk/blog/release/v18.17.1/)
- Hardhat [v2.17.2](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%402.17.2)
- OpenZeppelin Contracts [v4.9.3](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v4.9.3)
- Ethers [v6](https://docs.ethers.org/v6/)

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).

