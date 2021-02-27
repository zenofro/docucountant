<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaController extends Controller
{
    public function index(Project $project)
    {
        return response()->json([
            'media_images' => $project->getMedia('images')->map(function (Media $media) {
                return [
                    'file_name' => $media->file_name,
                    'mime' => $media->mime_type,
                    'url' => $media->getFullUrl()
                ];
            }),

            'media_videos' => $project->getMedia('videos')->map(function (Media $media) {
                return [
                    'file_name' => $media->file_name,
                    'mime' => $media->mime_type,
                    'url' => $media->getFullUrl(),
                    'thumbnail' => $media->getFullUrl('thumb')
                ];
            })
        ]);
    }

    public function store(Request $request, Project $project)
    {
        $this->validate($request, [
            'media' => ['required', 'mimes:jpg,png,mp4,wav,gif', 'max:10240']
        ]);

        if (Str::contains($request->file('media')->getMimeType(), ['image/jpeg', 'image/png', 'image/gif'])){
            $project->addMediaFromRequest('media')->toMediaCollection('images');
        }
        else{
            $project->addMediaFromRequest('media')
                ->toMediaCollection('videos');
        }


        return redirect()->back()->with('success', 'Successfully added media to project: ' . $project->name);
    }
}
