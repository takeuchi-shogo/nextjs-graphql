FROM node:16-alpine as deps

RUN apk add --no-cache libc-compat
WORKDIR /app

COPY package.json package-lock.json

FROM node:16-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm build

FROM node:16-apline as runner
WORKDIR /app

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

CMD ["node", "sever.js"]
