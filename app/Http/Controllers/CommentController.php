<?php

namespace App\Http\Controllers;

use App\Models\Comment;


use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comment;
        $comment->comment = $request->comment;
        $comment->user_id = 3;
        $comment->shout_id = $request->shout_id;
        $comment->save();

        return [$comment];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Comment::where('shout_id', $id)->get();
        //print_r($post);
        $commentsArr = [];
        foreach ($post as $key => $value) {
            // print_r($value->user_id);
            array_push($commentsArr, ['user' => $value->user_id, 'comment' => $value->comment]);
        }
        return response()->json($commentsArr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Comment::where('id', $id);
        return [$post];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $post = Comment::where('id', $request->id)->update(["comment" => $request->comment]);
        // $post->comment = $request->comment;
        // print_r($post);
        // $post->update(['comment' => $request->comment]);
        return $post;
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
