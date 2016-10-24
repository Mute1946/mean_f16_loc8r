#!/bin/bash
git add .
read -p "Commit description: " desc
git commit -m "$desc"
git remote add origin https://name:password@github.org/repo.git
git push -u origin master