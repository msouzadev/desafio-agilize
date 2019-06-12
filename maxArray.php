<?php

function getArray($array)
{
    $aux = [];
    foreach ($array as $arr) {
        if (is_array($arr)) {
            $aux = array_merge(getArray($arr), $aux);
        } else {
            $aux[] = $arr;
        }
    }

    return $aux;
}
function maxArray(array $array)
{
    return max(getArray($array));
}

$array =  [[241, 121, 361, 501], 5, 6, 10, [103, 204, [305, 725, 666]], [748, 45, [999]]];
echo maxArray($array);
