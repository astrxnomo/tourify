<?php

namespace App\Providers;

use App\Models\City;
use App\Models\Event;
use App\Models\Place;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void {}

    public function boot(): void
    {
        Relation::morphMap([
            'place' => Place::class,
            'event' => Event::class,
            'city'  => City::class,
        ]);
    }
}
