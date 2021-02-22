<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        //
    }

    public function create(Project $project, Section $section)
    {
        return Inertia::render('App/Projects/Pages/Create', [
            'project' => $project->only([
                'name',
                'slug'
            ]),
            'section' => $section->only([
                'title',
                'slug'
            ]),
            'order' => $section->pages()->count() + 1
        ]);
    }

    public function store(Request $request, Project $project, Section $section)
    {
        $this->validate($request, [
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('pages')->where('project_id', $project->id)
            ],
            'order' => ['required', 'integer']
        ]);

        $section->pages()->create([

        ]);
    }

    public function show(Page $page)
    {
        //
    }

    public function edit(Page $page)
    {
        //
    }

    public function update(Request $request, Page $page)
    {
        //
    }

    public function destroy(Page $page)
    {
        //
    }
}
