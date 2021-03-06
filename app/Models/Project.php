<?php

namespace App\Models;

use FFMpeg\FFMpeg;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Project extends Model implements HasMedia, Searchable
{
    use InteractsWithMedia;

    protected $guarded = ['id'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getNavigation()
    {
        return $this->sections()->orderBy('order')->get()->map(function (Section $section) {
            return [
                'id' => $section->id,
                'title' => $section->title,
                'pages' => $section->pages()->orderBy('order')->get()->map(function (Page $page) {
                    return $page->only('id', 'title', 'slug');
                })
            ];
        });
    }

    public function getUsersWithPermission()
    {
        return User::whereHas('permissions', function ($q){
            return $q->whereIn('name', ['projects.create,update,view.' . $this->id]);
        })->get();
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(500)
            ->height(500)
            ->extractVideoFrameAtSecond(1)
            ->performOnCollections('videos');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function pages()
    {
        return $this->hasManyThrough(Page::class, Section::class);
    }

    public function getSearchResult(): SearchResult
    {
        $url = route('app.projects.show', $this->slug);

        return new SearchResult(
            $this,
            $this->name,
            $url
        );
    }
}
