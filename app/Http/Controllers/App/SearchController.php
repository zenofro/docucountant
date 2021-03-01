<?php

namespace App\Http\Controllers\App;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;
use Spatie\Searchable\SearchResult;

class SearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $result = (new Search())
            ->registerModel(Project::class, 'name')
            ->search($request->value)
            ->map(function (SearchResult $i){
                return [
                    'type' => $i->type,
                    'title' => $i->title,
                    'url' => $i->url,
                ];
            });

        return response()->json([
            'result' => $result
        ]);
    }
}
