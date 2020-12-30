<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friends extends Model
{
    use HasFactory;

    public function user() //user
    {
        return $this->belongsTo('App\Models\User', 'sender'); //user_id_1
    }
    public function user2() //user2
    {
        return $this->belongsTo('App\Models\User', 'reciever'); //user_id_2
    }
}
