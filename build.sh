#!/usr/bin/env bash
# Build script for Render

set -e  # Exit on error

echo "==> Installing backend dependencies..."
cd backend
npm ci --only=production

echo "==> Installing frontend dependencies..."
cd ../frontend
npm ci

echo "==> Building frontend with Vite..."
npm run build

echo "==> Verifying build output..."
ls -la dist/

echo "✅ Build completed successfully!"
