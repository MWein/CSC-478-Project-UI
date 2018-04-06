#!/bin/bash

# This script is placed in the desktop of the servers
# It will git pull the project, this script included
# and start the server in prod or nonprod, depending
# on the host name

echo ""
echo "   Copyright (C) 2018 Hex"
echo ""

cd ..
cd client
cd csc-478-project-ui

echo "Updating project from Git"
git stash
git pull

echo ""
echo "Installing packages from NPM, this may take a moment"
npm install

echo ""
echo "Building distribution files"
npm run build

echo ""
echo "Copying distribution files to server folder"
cp -R dist/. ../../../../inetpub/wwwroot

echo ""
echo "Complete"