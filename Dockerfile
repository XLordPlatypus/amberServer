FROM oven/bun:latest

WORKDIR /app

COPY package.json .
COPY bun.lock .
RUN bun i

COPY .env .
COPY src .

EXPOSE 3000

CMD ["bun", "run", "dev"]