<?php
namespace App\Repositories;

use App\Address;
use GuzzleHttp\Client;

class AddressRepository
{
    protected $client;
    protected $table = 'addresses';
    protected $fillable = ['postalcode', 'street', 'complement', 'district', 'locality', 'uf', 'unity', 'ibge', 'gia'];

    public function __construct()
    {
        $this->client = new Client();
    }
    public function create($address)
    {
        return Address::create([
            'postalcode' => $address['cep'],
            'street' => $address['logradouro'],
            'complement' => $address['complemento'],
            'district' => $address['bairro'],
            'uf' => $address['uf'],
            'unity' => $address['unidade'],
            'ibge' => $address['ibge'],
            'gia' => $address['gia'],
        ]);
    }

    public function list()
    {
        return Address::all();
    }

    public function getAddressDetails(string $postalcode)
    {
        $address = $this->client->request('GET', config('viacep.url') . $postalcode . "/json");
        return $address->getBody()->getContents();
    }
}
