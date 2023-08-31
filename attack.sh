#!/bin/bash

pnpm now

pnpm fund --num "$1" &&

for ((i = 0; i < $1; i++)); do
  pnpm dance --wallet "$i" &
done

wait

pnpm now

echo " "
echo "Thank you for spamming that network! ✅"