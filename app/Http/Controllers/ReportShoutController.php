<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Models\Shout;
use Illuminate\Http\Request;

class ReportShoutController extends Controller
{



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $report = new Report();
        $report->description = $request->description;
        $report->category = $request->category;
        $report->user_id = $request->userId;
        $report->shout_id = $request->shoutId;
        $report->save();
        return ['success' => true, 'message' => 'Shout Reported'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shout = Shout::find($id);
        return $shout->report;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $report = Report::find($id);
        $report->delete();
        return back();
    }
}
