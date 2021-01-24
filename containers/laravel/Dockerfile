FROM php:7.4.13-fpm-alpine
LABEL maintainer "Tsunemasa Hachiya"
SHELL ["/bin/ash", "-oeux", "pipefail", "-c"]

WORKDIR /var/www/app/api

ENV TZ=Asia/Tokyo

RUN rm -rf /var/cache/apk/* \
    && rm -rf /tmp/* \
    && apk --no-cache update \
    && apk --no-cache upgrade \
    && apk --no-cache add \
    tzdata \
    curl-dev \
    libzip-dev \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    libxml2-dev \
    zlib-dev \
    pcre-dev \
    g++ \
    make \
    autoconf \
    oniguruma-dev \
    postgresql-dev \
  && docker-php-ext-install \
    curl \
    dom \
    pdo \
    pgsql \
    pdo_pgsql \
    simplexml \
    zip \
    opcache \
    gd \
  && docker-php-ext-configure gd \
    --with-freetype=/usr/include/ \
    --with-jpeg=/usr/include/ \
  && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
  && chmod +x /usr/local/bin/composer \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && echo ${TZ} > /etc/timezone \
  && apk del tzdata \
  && rm -rf /var/cache/apk/*

EXPOSE 9090

# PHPの設定ファイルをコンテナにコピー
ADD php.ini /usr/local/etc/php/php.ini
ADD www.conf /usr/local/etc/php-fpm.d/www.conf
