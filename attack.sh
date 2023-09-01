#!/bin/bash

pnpm fund --num "$1" &&

pnpm now &&

for ((i = 1; i <= $1; i++)); do
  pnpm dance --wallet "$i" &
done

wait

pnpm now 
