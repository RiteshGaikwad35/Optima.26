FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Copy source code
COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve


COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Start production server
CMD ["serve", "-s", "dist", "-l", "3000"]
