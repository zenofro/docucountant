<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

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
        return Inertia::render('App/Projects/Create', [
            'users' => User::whereHas('roles', function ($q) {
                return $q->whereNotIn('name', ['admin']);
            })
                ->get()
                ->map(function (User $user) {
                    return [
                        'id' => $user->id,
                        'name' => $user->name,
                        'permissions' => [
                            'create' => false,
                            'update' => false,
                            'view' => false,
                        ]
                    ];
                }),
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255', Rule::unique('projects')],
            'slug' => ['required', 'string', 'max:255', Rule::unique('projects')],
            'short_description' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'users' => ['nullable', 'array']
        ]);

        $project = Project::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'short_description' => $request->short_description,
            'description' => $request->description,
            'slug' => Str::slug($request->name)
        ]);

        // create permissions for this project
        if (!Permission::firstWhere('name', 'projects.create.' . $project->id)) {
            Permission::create(['name' => 'projects.create.' . $project->id]);
        }

        if (!Permission::firstWhere('name', 'projects.update.' . $project->id)) {
            Permission::create(['name' => 'projects.update.' . $project->id]);
        }

        if (!Permission::firstWhere('name', 'projects.view.' . $project->id)) {
            Permission::create(['name' => 'projects.view.' . $project->id]);
        }

        // give permissions to users
        foreach ($request->users as $userArr) {
            $user = User::findOrFail($userArr['id']);

            if($userArr['permissions']['create']) $user->givePermissionTo('projects.create.' . $project->id);
            if($userArr['permissions']['update']) $user->givePermissionTo('projects.update.' . $project->id);
            if($userArr['permissions']['view']) $user->givePermissionTo('projects.view.' . $project->id);
        }

        return redirect()->route('app.projects.index')->with('success', 'Project was created successfully');
    }

    public function show(Project $project)
    {
        return Inertia::render('App/Projects/Show', [
            'navigation' => $project->getNavigation(),
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
            ]),
            'users' => User::whereHas('roles', function ($q) {
                return $q->whereNotIn('name', ['admin']);
            })
                ->get()
                ->map(function (User $user) use ($project) {
                    return [
                        'id' => $user->id,
                        'name' => $user->name,
                        'permissions' => [
                            'create' => $user->can('projects.create.' . $project->id),
                            'update' => $user->can('projects.update.' . $project->id),
                            'view' => $user->can('projects.view.' . $project->id),
                        ]
                    ];
                }),
        ]);
    }

    public function update(Request $request, Project $project)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255', Rule::unique('projects')->ignoreModel($project)],
            'slug' => ['required', 'string', 'max:255', Rule::unique('projects')->ignoreModel($project)],
            'short_description' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'users' => ['nullable', 'array']
        ]);

        $project->update([
            'name' => $request->name,
            'short_description' => $request->short_description,
            'description' => $request->description,
            'slug' => Str::slug($request->name)
        ]);

        foreach ($request->users as $userArr) {
            $user = User::findOrFail($userArr['id']);

            $user->revokePermissionTo([
                'projects.create.' . $project->id,
                'projects.update.' . $project->id,
                'projects.view.' . $project->id,
            ]);

            if($userArr['permissions']['create']) $user->givePermissionTo('projects.create.' . $project->id);
            if($userArr['permissions']['update']) $user->givePermissionTo('projects.update.' . $project->id);
            if($userArr['permissions']['view']) $user->givePermissionTo('projects.view.' . $project->id);
        }

        return redirect()->route('app.projects.index')->with('success', 'Project was updated successfully');
    }

    public function destroy(Project $project)
    {
        try {
            $project->delete();

            return redirect()->route('app.projects.index')
                ->with('success', 'Project deleted successfully');
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Something went wrong, please try again.');
        }
    }
}
