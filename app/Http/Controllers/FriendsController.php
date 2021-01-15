<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Friends;
use Illuminate\Support\Facades\Auth;

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
        $user = User::find($id)->reciever->where('approved', 0);
        $reqArr = [];

        foreach ($user as $key => $value) {
            // print_r($value->user->username);
            array_push($reqArr, [$value->user]);
        }
        $flatten = array_merge(...$reqArr);


        return $flatten;
    }

    public function getUserList($id)
    {
        $users = User::all()->where('role', 'user');
        $userList = $users->except($id);

        $friends = Friends::where('sender', $id)->orWhere('reciever', $id)->get();
        //dd($friends);
        $friendsArr = [];
        foreach ($friends as $key => $value) {
            if (($value->user->id) != $id) {
                // print_r($value->user->username);
                array_push($friendsArr, [$value->user->id]);
            } elseif (($value->user2->id) != $id) {
                // print_r($value->user->username);
                array_push($friendsArr, [$value->user2->id]);
            } else {
                array_push($friendsArr);
            }
        }
        $flatten = array_merge(...$friendsArr);
        // dd($flatten);
        // dd($friends);
        $people = $userList->except($flatten);
        return $people;
    }




    public function request(Request $request)
    {
        // dd(Auth::user());

        $friend = new Friends;
        $friend->sender = $request->user_id; //User logged in Id
        $friend->reciever = $request->reciever; //user to send request
        $friend->save();

        return [
            'friend_id' => $request->reciever
        ];
    }

    public function acceptRequest(Request $request)
    {

        $friend = User::find($request->user_id)->reciever
            ->where('approved', 0)
            ->where('sender', $request->sender)
            ->first();
        // dd($friend);
        // $friend->user_id_2 = $request->user_id_2;
        $friend->approved = 1;
        $friend->save();
        return ['friend_id' => $request->sender];
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
        // $friends = DB::select('select * from friends where approved = 1 and (user_id_1 = ? or user_id_2 = ?) limit 1', [$id, $id]);
        $friend = Friends::where('sender', $id)
            ->where('approved', 1)
            ->orWhere('reciever', $id)
            ->where('approved', 1)->get();
        //  $friend = User::find($id)->reciever->where('approved', 1);
        // $friend = [...$friend, User::find($id)->sender->where('approved', 1)];
        // dd($friend[]);

        // $friendsArr = [];
        // foreach ($friend as $key => $value) {
        //     // print_r($value->user->username);
        //     array_push($friendsArr, ['sender' => $value->user, 'reciever' => $value->user2]);
        // }
        // return response()->json($friendsArr);

        $friendsArr = [];
        foreach ($friend as $key => $value) {
            if (($value->user->id) != $id) {
                // print_r($value->user->username);
                array_push($friendsArr, [$value->user]);
            } elseif (($value->user2->id) != $id) {
                // print_r($value->user->username);
                array_push($friendsArr, [$value->user2]);
            } else {
                array_push($friendsArr);
            }
        }
        $flatten = array_merge(...$friendsArr);
        return $flatten;
    }

    public function remove(Request $request)
    {
        $friend = Friends::where('sender', $request->user_id)
            ->where('reciever', $request->id)
            ->orWhere('sender', $request->id)
            ->where('reciever', $request->user_id)
            ->where('approved', 1)
            ->first();
        // $friend =  User::find(2)->sender->where('approved', 1)->where('reciever', $request->reciever)->first();
        //  dd($friend);
        $friend->delete();
        return [$request->id];
    }
    public function deleteRequest(Request $request)
    {
        $friend = Friends::where('sender', $request->id)
            ->where('reciever', $request->user_id)
            ->first();
        // $friend =  User::find(2)->sender->where('approved', 1)->where('reciever', $request->reciever)->first();
        // dd($friend);
        $friend->delete();
        return [$request->id];
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
