FROM nginx:1.15.0-alpine

COPY html /usr/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]