<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'description'
    ];

    public function shout()
    {
        return $this->belongsTo('App\Models\Shout');
    }
}
