#!/bin/bash
# Initialize project - install dependencies
# Usage: ./scripts/init.sh   or   bash scripts/init.sh

set -e
cd "$(dirname "$0")/.."

echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Project initialized successfully!"
echo "   Run './scripts/dev.sh' to start the development server."
