# Stage 1: Build stage
FROM node:18-alpine AS build

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

#install dependencies
# use npm install so image build works even when a lockfile isn't present
RUN npm install --only=production

# copy the rest of the application code
COPY . .

# build the React app
RUN npm run build

# Stage 2: Production stage
FROM nginx:alpine

#install curl for health checks
RUN apk add --no-cache curl

# Copy built assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html

#Copy nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

#expose port 80
EXPOSE 80

#health check endpoint
HEALTHCHECK --interval=30s --timeout=3s --start-interval=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1
    
#start nginx server
CMD ["nginx", "-g", "daemon off;"]