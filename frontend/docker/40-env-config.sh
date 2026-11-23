#!/bin/sh
set -e
cat > /usr/share/nginx/html/config.js <<EOT
window.__ENV__ = { VITE_API_URL: "${VITE_API_URL}" };
EOT
echo "config.js gerado com VITE_API_URL=${VITE_API_URL}"
