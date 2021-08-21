# pull official image
FROM node:14-alpine AS development
ENV NODE_ENV development

# set working directory
WORKDIR /app

# Cache and Install dependencies - very important step
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./

RUN npm install

# add app
COPY . ./

# open container port
EXPOSE 3000

# start app, as shortcut to "npm run start"
CMD [ "npm", "start" ]