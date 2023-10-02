FROM node:20.8 as build
WORKDIR /app
COPY . .
RUN npm install \&& npm run build

FROM nginx:1.25.2 as prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]