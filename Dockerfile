## Build Stage
FROM node:16 as builder

ARG BE_HOST

ENV NODE_ENV "production"
ENV REACT_APP_BE_HOST $BE_HOST

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


## Production Image
FROM nginx:alpine

ENV NODE_ENV "production"

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
