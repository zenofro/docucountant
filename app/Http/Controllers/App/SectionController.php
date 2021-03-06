<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

use function PHPUnit\Framework\once;

class SectionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Project $project)
    {
        if (!Auth::user()->canAny(['projects.create.' . $project->id, 'projects.update.' . $project->id])){
            abort(403);
        }

        return Inertia::render('App/Sections/Index', [
            'navigation' => $project->getNavigation(),
            'project' => $project->only([
                'id',
                'slug',
                'name',
                'short_description'
            ]),
            'sections' => $project->sections()->orderBy('order')->get()->map(function (Section $section) {
                return $section->only([
                    'id',
                    'title',
                    'order'
                ]);
            })
        ]);
    }

    public function create(Project $project)
    {
        $this->authorize('create', $project);

        return Inertia::render('App/Sections/Create', [
            'navigation' => $project->getNavigation(),
            'project' => $project->only([
                'id',
                'name',
                'slug'
            ]),
            'order' => $project->sections()->count() + 1
        ]);
    }

    public function store(Request $request, Project $project)
    {
        $this->authorize('create', $project);

        $this->validate($request, [
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('sections')->where('project_id', $project->id)
            ],
            'order' => ['required', 'integer']
        ]);

        $section = new Section([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'order' => $request->order
        ]);

        $project->sections()->save($section);

        if ($s = $project->sections()->whereOrder($section->order)->first()) {
            $s->update(['order' => $project->sections()->count()]);
        }

        return redirect()->route('app.projects.sections.index', $project)
            ->with('success', 'Section was created successfully for project: ' . $project->name);
    }

    public function show(Section $section)
    {
        //
    }

    public function edit(Section $section)
    {
        $this->authorize('update', $section->project);

        return Inertia::render('App/Sections/Edit', [
            'navigation' => $section->project->getNavigation(),
            'project' => $section->project->only([
                'id',
                'name',
                'slug'
            ]),
            'section' => $section->only([
                'id',
                'title',
                'slug',
                'order'
            ]),
            'sections' => $section->project->sections()->whereKeyNot($section->id)->get()->map(function (Section $section){
                return $section->only([
                    'id',
                    'title'
                ]);
            }),
            'pages' => $section->pages()->orderBy('order')->get()->map(function (Page $page) {
                return $page->only([
                    'id',
                    'slug',
                    'title',
                    'order'
                ]);
            })
        ]);
    }

    public function update(Request $request, Section $section)
    {
        $this->authorize('update', $section->project);

        $this->validate($request, [
            'title' => ['required', 'string', 'max:255'],
            'slug' => [
                'required',
                'string',
                'max:255',
                Rule::unique('sections')->where('project_id', $section->project->id)
            ]
        ]);

        $section->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title)
        ]);

        return redirect()->route('app.projects.sections.index', $section->project)->with('success',
            'Section was updated successfully');
    }

    public function destroy(Section $section)
    {
        $this->authorize('update', $section->project);

        if ($section->pages()->count() > 0){
            return redirect()->back()->with('error', 'You can\'t delete this section, there are still pages inside!');
        }

        $section->delete();

        return redirect()->route('app.projects.sections.index', $section->project)->with('success', 'Section removed successfully');
    }

    public function order(Request $request, Project $project)
    {
        $this->authorize('update', $project);

        $sections = collect($request->sections);

        foreach ($project->sections as $section) {
            $section->update(['order' => $sections->firstWhere('id', $section->id)['order']]);
        }

        return response()->json([
            'navigation' => $project->getNavigation()
        ]);
    }
}
