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

use function PHPUnit\Framework\once;

class SectionController extends Controller
{
    public function index(Project $project)
    {
        return Inertia::render('App/Projects/Sections/Index', [
            'project' => $project->only([
                'slug',
                'name',
                'short_description'
            ]),
            'sections' => Section::orderBy('order')->get()->map(function (Section $section) {
                return [
                    'title' => $section->title,
                    'order' => $section->order,
                    'slug' => $section->slug,
                    'pages' => $section->pages->map(function (Page $page) {
                        return $page->only([
                            'title',
                            'slug',
                            'order'
                        ]);
                    })
                ];
            })
        ]);
    }

    public function create(Project $project)
    {
        return Inertia::render('App/Projects/Sections/Create', [
            'project' => $project->only([
                'name',
                'slug'
            ]),
            'order' => $project->sections()->count() + 1
        ]);
    }

    public function store(Request $request, Project $project)
    {
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

        if($s = $project->sections()->whereOrder($section->order)->first()){
            $s->update(['order' => $project->sections()->count()]);
        }

        return redirect()->route('app.projects.sections.index', $project)
            ->with('success', 'Section was created successfully for project: ' . $project->name);
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
