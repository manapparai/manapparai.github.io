#!/bin/bash

# Navigate to the project folder
cd /home/developer/Documents/Projects/manapparai/manapparai.github.io/manapparai

# Build the project
ng build --output-path docs --base-href /

# Remove existing docs folder in the destination
rm -rf /home/developer/Documents/Projects/manapparai/manapparai.github.io/docs

# Move the docs folder to the destination
mv docs /home/developer/Documents/Projects/manapparai/manapparai.github.io

# Navigate to the destination folder
cd /home/developer/Documents/Projects/manapparai/manapparai.github.io

# Run Git commands
git add .
current_date_time=$(date "+%Y%m%d%H%M%S")
git commit -m "test_${current_date_time}"

# Optionally, you can push the changes if needed
git push origin