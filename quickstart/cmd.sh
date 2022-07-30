#!/bin/bash

if [[ $1 = "start" ]]
then
  hugo server -D 
  # hugo server --disableFastRender -D 
elif [[ $1 = "build:prod" ]]
then
  hugo
elif [[ $1 = "init" ]]
then
  cd themes/drewfle-blog;
  npm i;
  npm i -g postcss-cli autoprefixer
fi