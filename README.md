# EVM Load Testing

## Install

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

```
pnpm basic
```

## Run

```
./attack.sh 30
```

Then, put the `wallets.json` file back to its initial state: 

```
pnpm reset
```

## Analize

```
pnpm analize --start 73200 --end 73349
```

## Latest run 

- From block `73084` (2023-08-31T16:59:02.625Z) to block `73349` (2023-08-31T17:01:00.455Z)
- Total amount of transactions: `2672`
- Duration (in seconds): `2672`
- TPS rate (average): `56`
[Watch video (asciinema)](https://asciinema.org/a/8OIATaFNckG2j7xTpzDkItlBU)

## Versions

- Node [v18.17.1](https://nodejs.org/uk/blog/release/v18.17.1/)
- Hardhat [v2.17.2](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%402.17.2)
- OpenZeppelin Contracts [v4.9.3](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v4.9.3)
- Ethers [v6](https://docs.ethers.org/v6/)

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).

