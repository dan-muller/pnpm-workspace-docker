FROM node:18-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache libc6-compat

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build

# Deploy each package in the monorepo workspace
RUN pnpm deploy --filter=app --prod /prod/app

FROM base AS app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

WORKDIR /prod/app
COPY --from=build --chown=nextjs:nodejs /prod/app/ ./
COPY --from=build --chown=nextjs:nodejs /prod/app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /prod/app/.next/static ./.next/static

USER nextjs

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]