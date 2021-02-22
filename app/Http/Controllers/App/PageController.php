<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        //
    }

    public function create(Project $project)
    {
        return Inertia::render('App/Pages/Create', [
            'project' => $project->only([
                'name',
                'slug'
            ]),
            'sections' => $project->sections->map(function (Section $section){
                return $section->only([
                    'id',
                    'title',
                    'slug'
                ]);
            }),
        ]);
    }

    public function store(Request $request, Project $project)
    {
        $section = $project->sections()->findOrFail($request->section_id);
        $this->validate($request, [
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('pages')->where('section_id', $section->id)
            ]
        ]);

        $page = new Page([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'order' => $section->pages()->count() + 1
        ]);

        $section->pages()->save($page);

        return redirect()->route('app.pages.show', $page)->with('success', 'Page created successfully');
    }

    public function show(Page $page)
    {
        return Inertia::render('App/Pages/Show', [
            'project' => $page->section->project->only([
                'slug',
                'name'
            ]),
            'section' => $page->section->only([
               'slug',
               'title'
            ]),
            'page' => $page->only([
                'id',
                'title',
                'contents'
            ])
        ]);
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
