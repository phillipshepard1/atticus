FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    git \
    ffmpeg \
    supervisor \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libgd-dev \
    jpegoptim optipng pngquant gifsicle \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd xml intl

COPY docker-compose/app/start.sh /usr/local/bin/start

RUN chmod u+x /usr/local/bin/start

CMD ["/usr/local/bin/start"]

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN echo "upload_max_filesize = 200M" >> /usr/local/etc/php/conf.d/uploads.ini \ 
 && echo "post_max_size = 200M" >> /usr/local/etc/php/conf.d/uploads.ini

WORKDIR /var/www/atticus

USER $user
