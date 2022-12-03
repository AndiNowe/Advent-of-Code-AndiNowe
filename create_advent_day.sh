#!/bin/bash

set -e

if [ $# -eq 0 ]
  then
    echo "Please indicate day number you want to create."
    exit 0
fi

DAY=$1

echo "Creating day " "$DAY"

DAY_PATH="Day $DAY"
DATA_PATH="data"

[ -d "$DAY_PATH" ] && echo "Directory $DAY_PATH already exists." && exit 0

mkdir "$DAY_PATH"
touch "$DAY_PATH/day${DAY}a.ts"
touch "$DAY_PATH/day${DAY}b.ts"

mkdir "$DAY_PATH/$DATA_PATH"
touch "$DAY_PATH/$DATA_PATH/data.txt"
touch "$DAY_PATH/$DATA_PATH/test.txt"
touch "$DAY_PATH/$DATA_PATH/statement.html"

cp "package.json" "$DAY_PATH/package.json"
cp "tsconfig.json" "$DAY_PATH/tsconfig.json"

echo "Done."