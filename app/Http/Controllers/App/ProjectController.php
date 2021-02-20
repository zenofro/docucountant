<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function __constructor()
    {
        dd('test');
    }

    public function index()
    {
        return Inertia::render('App/Projects/Index', [
            'projects' => Project::all()->map(function (Project $project) {
                return [
                    'id' => $project->id,
                    'name' => $project->name,
                    'short_description' => $project->short_description,
                    'user' => $project->user->only('name')
                ];
            })
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
