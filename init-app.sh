#!/bin/bash

if [ ! -d "/usr/src/app/node_modules" ]; then
  yarn install
fi

if [ "$NODE_ENV" = "production" ]; then
  yarn build && yarn export
else
  yarn dev
fi
