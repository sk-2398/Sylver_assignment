# Specify the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port on which the backend will run
EXPOSE 5000

# Start the backend server
CMD ["npx", "nodemon", "./index.js"]