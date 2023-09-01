#!/bin/bash

pnpm fund --num "$1" &&

pnpm now &&

for ((i = 0; i <= $1; i++)); do
  pnpm dance --wallet "$i" &
done

pnpm now &&

echo "Thank you for spamming that network! ✅" &&

wait