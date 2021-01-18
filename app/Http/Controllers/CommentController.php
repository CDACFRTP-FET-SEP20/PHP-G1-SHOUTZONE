<?php

namespace App\Http\Controllers;

use App\Models\Comment;


use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comment;
        $comment->shout_id = $request->shout_id;
        $comment->user_id = $request->id;
        $comment->comment = $request->comment;
        $comment->save();

        return $comment;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $comments = Comment::where('shout_id', $id)->get();

        foreach ($comments as $key => $value) {
            $value->user;
        }
        return response()->json($comments);
    }





    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comment::where('id', $id)->first();
        $comment->delete();
        return $id;
    }
}
