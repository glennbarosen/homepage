FROM node:24-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "start"]
