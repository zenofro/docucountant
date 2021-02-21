<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Illuminate\Http\Request;
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
            'sections' => Section::all()->map(function (Section $section) {
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
