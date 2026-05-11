<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Event extends Model
{
    protected $fillable = ['city_id', 'place_id', 'title', 'description', 'date'];

    protected function casts(): array
    {
        return [
            'date' => 'datetime',
        ];
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }

    public function place(): BelongsTo
    {
        return $this->belongsTo(Place::class);
    }

    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    public function reviews(): MorphMany
    {
        return $this->morphMany(Review::class, 'reviewable');
    }

    public function favorites(): MorphMany
    {
        return $this->morphMany(Favorite::class, 'favorable');
    }

    public function registrations(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(EventRegistration::class);
    }
}
