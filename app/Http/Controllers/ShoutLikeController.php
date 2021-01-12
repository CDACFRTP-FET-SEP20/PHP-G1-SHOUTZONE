<?php

namespace App\Http\Controllers;

use App\Models\Shout;
use App\Models\User;
use Illuminate\Http\Request;

class ShoutLikeController extends Controller
{
    public function store(Request $request)
    {
        $shout = Shout::find($request->user_id);

        $shout->likes()->create([
            'user_id' => $request->user_id,
        ]);

        return ['Liked'];
    }

    public function destroy(Request $request)
    {
        $user = User::find($request->user_id);
        $user->likes()->where('shout_id', $request->shout_id)->delete();
        return ['deleted'];
    }
}
