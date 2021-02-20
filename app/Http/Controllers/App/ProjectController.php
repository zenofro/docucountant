<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        return Inertia::render('App/Projects/Index', [
            'projects' => Project::all()->map(function (Project $project) {
                return [
                    'slug' => $project->slug,
                    'name' => $project->name,
                    'short_description' => $project->short_description,
                    'user' => $project->user->only('name')
                ];
            })
        ]);
    }

    public function create()
    {
        return Inertia::render('App/Projects/Create');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255', Rule::unique('projects')],
            'slug' => ['required', 'string', 'max:255', Rule::unique('projects')],
            'short_description' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        Auth::user()->projects()->create([
            'name' => $request->name,
            'short_description' => $request->short_description,
            'description' => $request->description,
            'slug' => Str::slug($request->name)
        ]);

        return redirect()->route('app.projects.index')->with('success', 'Project was created successfully');
    }

    public function show(Project $project)
    {
        return Inertia::render('App/Projects/Show', [
            'project' => $project->only([
                'name',
                'slug',
                'short_description',
                'description'
            ])
        ]);
    }

    public function edit(Project $project)
    {
        return Inertia::render('App/Projects/Edit', [
            'project' => $project->only([
                'name',
                'slug',
                'short_description',
                'description'
            ])
        ]);
    }

    public function update(Request $request, Project $project)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255', Rule::unique('projects')->ignoreModel($project)],
            'slug' => ['required', 'string', 'max:255', Rule::unique('projects')->ignoreModel($project)],
            'short_description' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
        ]);

        $project->update([
            'name' => $request->name,
            'short_description' => $request->short_description,
            'description' => $request->description,
            'slug' => Str::slug($request->name)
        ]);

        return redirect()->route('app.projects.index')->with('success', 'Project was updated successfully');
    }

    public function destroy(Project $project)
    {
        try {
            $project->delete();

            return redirect()->route('app.projects.index')
                ->with('success', 'Project deleted successfully');
        } catch (\Exception $e){
            return redirect()->back()
                ->with('error', 'Something went wrong, please try again.');
        }
    }
}
