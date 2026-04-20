# Use the official lightweight Node.js 22 image.
# https://hub.docker.com/_/node
FROM node:22

# Create and change to the app directory.
WORKDIR /usr/src/app

RUN git clone https://github.com/emdewsnap/UwUizer.git
WORKDIR /usr/src/app/UwUizer

# COPY package*.json ./

RUN apt-get update && apt-get upgrade -y
RUN pwd && ls && npm install && npm audit fix

# Copy local code to the container image.
# COPY *.js .

COPY uwu_env .env


# Expose the port your app runs in
EXPOSE 3001

# Run the web service on container startup.
CMD [ "node", "bot.js" ]