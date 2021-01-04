<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shout extends Model
{
    use HasFactory;
    public $timestap = false;
    protected $fillable = [
        // 'Description',
        // 'media',

    ];
    protected $table = "shouts";



    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function report()
    {
        return $this->hasMany('App\Models\Report');
    }
}
