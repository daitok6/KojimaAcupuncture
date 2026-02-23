#!/bin/bash
# Push code to GitHub (git add, commit, push)
# Usage: ./scripts/push.sh "Your commit message"
#    or: ./scripts/push.sh   (will prompt for commit message)

cd "$(dirname "$0")/.."

if [ -n "$1" ]; then
  COMMIT_MSG="$1"
else
  echo "Enter commit message:"
  read -r COMMIT_MSG
  if [ -z "$COMMIT_MSG" ]; then
    echo "❌ Commit message cannot be empty."
    exit 1
  fi
fi

echo "📝 Staging all changes..."
git add .

echo "💾 Committing with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "🚀 Pushing to GitHub..."
git push

echo ""
echo "✅ Successfully pushed to GitHub!"
