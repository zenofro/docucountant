<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $guarded = ['id'];

    public function project()
    {
        $this->belongsTo(Project::class);
    }
}
