<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Friends;
use Illuminate\Support\Facades\DB;

class FriendsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function friendList()
    // {
    //     // $friends = Friends::where('approved', 1)->get();
    //     // $user = User::find(2)->friends->where('approved', 1);
    //     //$friends = DB::select('select * from friends where (user_id_1 = ? or user_id_2 = ?) and approved = 1', [3, 3]);
    //     // dd($friends);

    //     return $friends;
    // }

    public function getFriendRequest($id)
    {
        $user = User::find($id)->friends->where('approved', 0);
        //dd($user);

        return $user;
    }

    public function accept()
    {
    }


    public function request(Request $request)
    {
        $friend = new Friends;
        $friend->user_id_1 = $request->user_id_1; //Id of friend to send request
        $friend->user_id_2 = 2;  //User logged in Id
        $friend->save();

        return [
            'friend_id' => $request->user_id_1
        ];
    }

    public function acceptRequest(Request $request)
    {


        $friend = User::find(1)->friends->where('approved', 0)->where('user_id_2', $request->user_id_2)->first();
        // dd($friend);
        // $friend->user_id_2 = $request->user_id_2;
        $friend->approved = 1;
        $friend->save();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //$user = User::find($id);
        $friends = DB::select('select * from friends where approved = 1 and (user_id_1 = ? or user_id_2 = ?) ', [$id, $id]);


        return $friends;
    }

    public function remove(Request $request)
    {
        $friend =  User::find(1)->friends->where('approved', 1)->where('user_id_2', $request->user_id_2)->first();
        //dd($friend);
        $friend->delete();
        return [$friend->user_id_2];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
