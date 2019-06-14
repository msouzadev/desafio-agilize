<?php

namespace App\Http\Controllers;

use App\Address;
use Illuminate\Http\Request;
use App\Repositories\AddressRepository;
use function GuzzleHttp\json_encode;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $addressRepo;
    public  function __construct()
    {
        $this->addressRepo = new AddressRepository();
    }
    public function index()
    {
        return $this->addressRepo->list();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $address =  json_decode($this->addressRepo->getAddressDetails($request->postalCode), true);
        if (!$address) {
            return response()->json(['error' => 'erro ao consultar cep'], 500);
        }

        return response()->json($this->addressRepo->create($address));
    }
}
