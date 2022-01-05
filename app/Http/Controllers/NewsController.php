<?php

namespace App\Http\Controllers;

use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        return News::paginate(5);
    }

    public function specific($request)
    {
        return News::where("id", $request)->first();
    }
}
