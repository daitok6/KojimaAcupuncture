#!/bin/bash
# Launch development server
# Usage: ./scripts/dev.sh   or   bash scripts/dev.sh

cd "$(dirname "$0")/.."

echo "🚀 Starting development server..."
npm run dev
