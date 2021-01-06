<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shout;
use App\Models\User;

class ShoutsController extends Controller
{
    public function uploadmedia(Request $req)
    {
        $shoutsUpload = new Shout($req->input()) ;

        $shoutsUpload->user_id = $req->user_id;

        $shoutsUpload->shoutType = $req->shoutType;

        $shoutsUpload->shoutText= $req->shoutText;
         if($file = $req->hasFile('shoutMedia')) {
            $file = $req->file('shoutMedia') ;
            $fileName = $file->getClientOriginalName() ;//file is save with original name
            $destinationPath = public_path().'/Shouts/' ;
            $file->move($destinationPath,$fileName);//move to shouts folder
            $shoutsUpload->shoutMedia = '/Shouts/'.$fileName ;
        }
        $shoutsUpload->save() ;
       return response()->json(['message' => 'media Uploaded Successfully']);
    }
    public function list()
    {
 $allShouts= Shout::all();
 return view('see-all-shouts')->with('list',$allShouts);
    }
    public function show($id)
    {
        $user = User::find($id);
        $shoutsUpload=$user->shout;
        return $shoutsUpload;

    }

    public function destroy($id)
    {
        $shoutsUpload = Shout::find($id);
        $shoutsUpload->delete();

    }


}
