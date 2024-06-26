<?php

namespace App\Http\Controllers;

use App\Models\ProjectDetails;
use Illuminate\Http\Request;

class ProjectDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }
    public function getALLDATA()
    {
          
          return response()->json([
                 "status"=>"200",
                 "message"=>"This is message from Project Details Controller"
          ]);
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
     * @param  \App\Models\ProjectDetails  $projectDetails
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectDetails $projectDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectDetails  $projectDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectDetails $projectDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectDetails  $projectDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProjectDetails $projectDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectDetails  $projectDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectDetails $projectDetails)
    {
        //
    }       
}
