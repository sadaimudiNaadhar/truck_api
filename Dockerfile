FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy app source code
COPY . .

# Build app
RUN npm ci
RUN cp .env.example .env
RUN npm run build

EXPOSE 3000

CMD ["node", "build/src/server.js"]
