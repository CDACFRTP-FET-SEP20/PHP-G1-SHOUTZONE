<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shout;
use App\Models\User;
use App\Models\Friends;

class ShoutsController extends Controller
{
    public function uploadmedia(Request $req)
    {


        $shoutsUpload = new Shout($req->input());
        $shoutsUpload->shoutType = $req->shoutType;
        $shoutsUpload->shoutText = $req->shoutText;
        if ($file = $req->hasFile('shoutMedia')) {
            $file = $req->file('shoutMedia');
            $fileName = $file->getClientOriginalName();
            $destinationPath = public_path() . '/Shouts/';
            $file->move($destinationPath, $fileName);
            $shoutsUpload->shoutMedia = '/Shouts/' . $fileName;
        }
        $shoutsUpload->save();
        return response()->json(['message' => 'media Uploaded Successfully']);
    }
    public function list()
    {
        return Shout::all();
    }
    public function show($id)
    {
        $user = User::find($id);
        $shoutsUpload = $user->shout->where('user_id', $id);
        return $shoutsUpload;
    }



    public function destroy($id)
    {
        $shoutsUpload = Shout::find($id);
        $shoutsUpload->delete();
    }

    public function friendShout($id)
    {
        $friend = Friends::where('sender', $id)
            ->where('approved', 1)
            ->orWhere('reciever', $id)
            ->where('approved', 1)->get();

        $friendsArr = [];
        foreach ($friend as $key => $value) {
            if (($value->user->id) != $id) {
                // print_r($value->user->username);
                array_push($friendsArr, [$value->user->username, $value->user->shout]);
            } elseif (($value->user2->id) != $id) {
                // print_r($value->user->username);
                array_push($friendsArr, [$value->user2->username, $value->user2->shout]);
            } else {
                array_push($friendsArr);
            }
        }

        dd($friendsArr);

        //$friends = array_merge(...$friendsArr);
        //return $friends->shout;
    }

    public function update(Request $request, $id)
    {
        $shoutsUpload = Shout::find($id);
        $shoutsUpload->shoutType = $request->input('shoutType');
        $shoutsUpload->shoutText = $request->input('shoutText');
        if ($file = $request->hasFile('shoutMedia')) {
            $file = $request->file('shoutMedia');
            $fileName = $file->getClientOriginalName();
            $destinationPath = public_path() . '/Shouts/';
            $file->move($destinationPath, $fileName);
            $shoutsUpload->shoutMedia = '/Shouts/' . $fileName;
        }
        $shoutsUpload->save();
    }
}
