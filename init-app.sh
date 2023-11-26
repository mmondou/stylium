#!/bin/bash

if [ ! -d "/usr/src/app/node_modules" ]; then
  npm install
fi

if [ "$NODE_ENV" = "production" ]; then
  npm run build && npm run export
else
  npm run dev
fi
