<?php

namespace App\Http\Controllers;

use App\Http\Resources\FarmResource;
use App\Models\Farm;
use Illuminate\Http\Request;

use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $data = [
            'farms' => FarmResource::collection(Farm::all()),
        ];

        return Inertia::render('Home', $data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Farm  $farm
     * @return \App\Http\Resources\FarmResource
     */
    public function show(Farm $farm)
    {
        return new FarmResource($farm);
    }
}
