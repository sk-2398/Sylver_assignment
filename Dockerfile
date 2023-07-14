# Specify the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend code
RUN npm run build

# Expose the port on which the frontend will run
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
