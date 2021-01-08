<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'role',
        'password',
        'is_approved'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function bio()
    {
        return $this->hasOne('App\Models\Bio');
    }

    public function shout()
    {
        return $this->hasMany('App\Models\Shout');
    }

    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function sender() //friends
    {
        return $this->hasMany('App\Models\Friends', 'sender'); //user_id_1
    }

    public function reciever() //friends1
    {
        return $this->hasMany('App\Models\Friends', 'reciever'); //user_id_2
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
