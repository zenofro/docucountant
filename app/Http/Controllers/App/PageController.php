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
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create(Project $project)
    {
        $this->authorize('create', $project);

        return Inertia::render('App/Pages/Create', [
            'navigation' => $project->getNavigation(),
            'project' => $project->only([
                'id',
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
        $this->authorize('create', $project);

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
            'slug' => Str::slug($section->slug . ' ' . $request->title),
            'order' => $section->pages()->count() + 1
        ]);

        $section->pages()->save($page);

        return redirect()->route('app.projects.pages.show', [$project, $page])->with('success', 'Page created successfully');
    }

    public function show(Project $project, $slug)
    {
        $this->authorize('view', $project);

        $page = $project->pages->firstWhere('slug', $slug);

        if (!$page) abort(404);

        return Inertia::render('App/Pages/Show', [
            'navigation' => $page->section->project->getNavigation(),
            'project' => $page->section->project->only([
                'id',
                'slug',
                'name'
            ]),
            'section' => $page->section->only([
               'slug',
               'title'
            ]),
            'page' => $page->only([
                'id',
                'slug',
                'title',
                'contents'
            ])
        ]);
    }

    public function edit(Project $project, $slug)
    {
        $this->authorize('update', $project);

        $page = $project->pages->firstWhere('slug', $slug);

        if (!$page) abort(404);

        return Inertia::render('App/Pages/Edit', [
            'navigation' => $page->section->project->getNavigation(),
            'project' => $page->section->project->only([
                'id',
                'slug',
                'name'
            ]),
            'section' => $page->section->only([
                'slug',
                'title'
            ]),
            'page' => $page->only([
                'id',
                'slug',
                'title',
                'contents'
            ])
        ]);
    }

    public function update(Request $request, Project $project, $slug)
    {
        $this->authorize('update', $project);

        $page = $project->pages->firstWhere('slug', $slug);

        if (!$page) abort(404);

        $page->update(['contents' => $request->contents]);

        return redirect()->route('app.projects.pages.show', ['project' => $project, 'page' => $page]);
    }

    public function destroy(Project $project, $slug)
    {
        $this->authorize('update', $project);

        $project->pages->firstWhere('slug', $slug)->delete();

        return redirect()->back()->with('success', 'Removed page from project!');
    }

    public function order(Request $request, Section $section)
    {
        $this->authorize('update', $section->project);

        $pages = collect($request->pages);

        foreach ($section->pages as $page) {
            $page->update(['order' => $pages->firstWhere('id', $page->id)['order']]);
        }

        return response()->json([
            'navigation' => $section->project->getNavigation()
        ]);
    }

    public function transfer(Request $request)
    {
        $page = Page::findOrFail($request->pageId);

        $this->authorize('update', $page->section->project);

        $page->update([
            'section_id' => $request->targetSectionId
        ]);

        return redirect()->route('app.sections.edit', $page->section)->with('success', 'Page transfered successfully');
    }
}
