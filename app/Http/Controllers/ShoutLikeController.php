<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Shout;
use Illuminate\Http\Request;

class ShoutLikeController extends Controller
{
    public function store(Request $request)
    {
        $shout = Shout::find($request->shout_id);

        $shout->likes()->create([
            'user_id' => $request->user_id,
        ]);

        return ['Liked'];
    }

    public function destroy(Request $request)
    {
        $like = Like::where('user_id', $request->user_id);
        $like->delete();
        return ['deleted'];
    }
}
