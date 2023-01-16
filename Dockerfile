FROM alpine
RUN apk update && apk add nginx -q
RUN mkdir /home/rickAndMorty
RUN mkdir /etc/nginx/conf.d
COPY ./nginx.conf /etc/nginx
CMD ["nginx", "-g", "daemon off;"]
