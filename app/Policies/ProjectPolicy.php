<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Auth;

class ProjectPolicy
{
    use HandlesAuthorization;

    public function __construct()
    {
        //
    }

    /**
     * Perform pre-authorization checks.
     *
     * @param \App\Models\User $user
     * @param string $ability
     * @return void|bool
     */
    public function before(User $user, $ability)
    {
        if ($user->hasRole('admin')) {
            return true;
        }
    }

    /**
     * Determine whether the user can view any projects.
     *
     * @param User $user
     * @return bool
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the project.
     *
     * @param User $user
     * @param Project $project
     * @return bool
     */
    public function view(User $user, Project $project)
    {
        if ($user->can('projects.view.' . $project->id)) {
            return true;
        }
    }

    /**
     * Determine whether the user can create projects.
     *
     * @param User $user
     * @return bool
     */
    public function create(User $user, Project $project)
    {
        if ($user->can('projects.create.' . $project->id)) {
            return true;
        }
    }

    /**
     * Determine whether the user can update the project.
     *
     * @param User $user
     * @param Project $project
     * @return bool
     */
    public function update(User $user, Project $project)
    {
        if ($user->can('projects.update.' . $project->id)) {
            return true;
        }
    }

    /**
     * Determine whether the user can delete the project.
     *
     * @param User $user
     * @param Project $project
     * @return bool
     */
    public function delete(User $user, Project $project)
    {
        //
    }

    /**
     * Determine whether the user can restore the project.
     *
     * @param User $user
     * @param Project $project
     * @return bool
     */
    public function restore(User $user, Project $project)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the project.
     *
     * @param User $user
     * @param Project $project
     * @return bool
     */
    public function forceDelete(User $user, Project $project)
    {
        //
    }
}
