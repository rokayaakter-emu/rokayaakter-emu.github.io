#!/bin/bash
set -e  # Exit on error

# Ensure TMPDIR is set, default to /tmp
TMPDIR="${TMPDIR:-/tmp}"

# Checkout source branch and build
git checkout source
git pull origin source

npm install
npm run build

# Backup dist
cp -r dist "$TMPDIR/dist-backup"

# Switch to target branch
git checkout main
git pull origin main

# Remove everything except .git and .idea
shopt -s extglob
rm -rf !( .git|.idea )

# Restore dist backup
cp -r "$TMPDIR/dist-backup/." .
rm -rf "$TMPDIR/dist-backup"

# Commit and push
git add .
git commit -m "Deploy from source at $(date '+%Y-%m-%d %H:%M:%S')"
git push -u origin main

# Switch back
git checkout source
