# ------------------------------
# Stage 1: Application Building
# ------------------------------
# DOKERFILE REFERENCE: https://docs.docker.com/engine/reference/builder/

# Import NodeJS image
FROM --platform=linux/amd64 node:current-alpine as build

# Create app directory
WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# Bundle app source
COPY . .

# Install the react npm dependencies
WORKDIR /app/source/front-end
RUN npm install

# Install the rest of npm dependencies
WORKDIR /app
RUN npm install

# Expose the ports from the front-end and api respectively
EXPOSE 3006
EXPOSE 8000

# Run application (concurrently with api and front client)
CMD ["npm","start"]