<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Friends;


class FriendsController extends Controller
{

    public function getFriendRequest($id)
    {
        $user = User::find($id)->reciever->where('approved', 0);
        $reqArr = [];

        foreach ($user as $key => $value) {
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
        $friendsArr = [];
        foreach ($friends as $key => $value) {
            if (($value->user->id) != $id) {
                array_push($friendsArr, [$value->user->id]);
            } elseif (($value->user2->id) != $id) {
                array_push($friendsArr, [$value->user2->id]);
            } else {
                array_push($friendsArr);
            }
        }
        $flatten = array_merge(...$friendsArr);

        $people = $userList->except($flatten);
        return $people;
    }




    public function request(Request $request)
    {

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
        $friend->approved = 1;
        $friend->save();
        return ['friend_id' => $request->sender];
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $friend = Friends::where('sender', $id)
            ->where('approved', 1)
            ->orWhere('reciever', $id)
            ->where('approved', 1)->get();


        $friendsArr = [];
        foreach ($friend as $key => $value) {
            if (($value->user->id) != $id) {
                array_push($friendsArr, [$value->user]);
            } elseif (($value->user2->id) != $id) {
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
        $friend->delete();
        return [$request->id];
    }
    public function deleteRequest(Request $request)
    {
        $friend = Friends::where('sender', $request->id)
            ->where('reciever', $request->user_id)
            ->first();
        $friend->delete();
        return [$request->id];
    }
}
