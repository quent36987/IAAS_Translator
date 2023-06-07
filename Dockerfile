FROM nginx:latest

COPY src /var/www/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
