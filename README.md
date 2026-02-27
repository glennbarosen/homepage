# homepage

> 👋 My personal homepage.

Built with SvelteKit.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run the built app locally
npm start
```

## Deployment

This app is deployed on a self-hosted Dokku server on Hetzner Cloud.

### Prerequisites

- SSH access to the Dokku server
- `dokku` git remote configured (should already be set up)

### Deploying a new version

After making changes and committing locally:

```bash
# Push to both GitHub (backup) and Dokku (deploy)
git push origin main && git push dokku main
```

The Dokku server will automatically:
1. Detect the new commits
2. Build a Docker image using the `Dockerfile`
3. Start a new container with pnpm dependencies frozen
4. Run healthchecks to verify the app is working
5. Redirect traffic to the new container
6. Gracefully shut down the old container after 60 seconds

### Monitor deployment

Watch logs in real-time:

```bash
ssh personal "dokku logs -f homepage --tail 100"
```

Or check the latest deployment status:

```bash
ssh personal "dokku ps:inspect homepage"
```

### App Details

- **URL:** https://glennbarosen.com
- **Server:** Hetzner Cloud (46.62.135.107)
- **Runtime:** Node.js 24.x
- **Package Manager:** pnpm with lockfile
- **Container Port:** 3000
- **HTTPS:** Let's Encrypt (auto-renews 30 days before expiration)

### Technology Stack

- **Framework:** SvelteKit
- **Adapter:** Node.js (via @sveltejs/adapter-node)
- **Container:** Docker with multi-stage build
- **PaaS:** Dokku on Ubuntu 24.04
