FROM php:8.2-fpm

WORKDIR /var/www

RUN apt-get update && \
    apt-get install -y zip libzip-dev && \
    docker-php-ext-install zip pdo pdo_mysql

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer

RUN rm -rf /var/www/* && \
    composer create-project --prefer-dist laravel/laravel .

ENTRYPOINT ["php", "artisan", "serve"]

CMD [ "--host=0.0.0.0" ]