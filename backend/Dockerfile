FROM node:12.18-alpine
ENV NODE_ENV=production, MONGO_URL=mongodb+srv://pablo:OTsogoINmlNhSncI@initialcluster.ohwnu.mongodb.net/test?retryWrites=true&w=majority
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
CMD ["npm", "start"]