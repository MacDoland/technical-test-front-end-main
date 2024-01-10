<?php

namespace App\Http\Controllers;

use App\Http\Resources\FarmResource;
use App\Http\Resources\TurbineResource;
use App\Models\Farm;
use App\Models\Turbine;
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
        //TODO: Possibly combining into single model
        $farms = FarmResource::collection(Farm::all());
        $turbines = TurbineResource::collection(Turbine::all());

        $data = [
            'farms' => $farms,
            'turbines' => $turbines,
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
