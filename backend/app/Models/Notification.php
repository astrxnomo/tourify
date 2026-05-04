<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Notification extends Model
{
    protected $fillable = ['user_id', 'notifiable_id', 'notifiable_type', 'title', 'message', 'is_read'];

    protected function casts(): array
    {
        return [
            'is_read' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function notifiable(): MorphTo
    {
        return $this->morphTo();
    }
}
