<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

// \Inovector\Mixpost\Schedule::register(Schedule::class);

Schedule::command('horizon:snapshot')->everyFiveMinutes();
Schedule::command('queue:prune-batches')->daily();
Schedule::command('queue:prune-failed')->daily();

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');
