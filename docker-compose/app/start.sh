#!/bin/sh

set -e

role=${CONTAINER_ROLE:-queue}
work_on_queues=${WORK_ON_QUEUES:-default}

if [ "$role" = "app" ]; then

    php-fpm

elif [ "$role" = "queue" ]; then

    echo "Running the queue..."
    php /var/www/atticus/artisan queue:work --queue="$work_on_queues" --sleep=3 --tries=3 -v &

    php /var/www/atticus/artisan queue:work --queue=publish-post --tries=10 --timeout=600 --verbose

elif [ "$role" = "scheduler" ]; then

    echo "Running the scheduler..."
    php /var/www/atticus/artisan schedule:work

else
    echo "Could not match the container role \"$role\""
    exit 1
fi
