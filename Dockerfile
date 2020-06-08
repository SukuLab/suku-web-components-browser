FROM node:9.11.1 as build-stage
COPY ./ /app
WORKDIR /app
RUN npx npm i typescript@">=3.1.1 <3.2"
RUN npx npm i @angular/cli
RUN npm install
RUN npm run prod

FROM nginx:1.15.6
COPY --from=build-stage /app/dist/suku-doc/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

