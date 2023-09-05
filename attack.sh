#!/bin/bash

pnpm reset &&

pnpm fund --num "$1" &&

pnpm now &&

for ((i = 1; i <= $1; i++)); do
  pnpm dance --wallet "$i" &
done

wait

pnpm now && 

json_file="blocks.json"

start=$(jq -r '.start' "$json_file")
end=$(jq -r '.end' "$json_file")

pnpm analyze --start $start --end $end