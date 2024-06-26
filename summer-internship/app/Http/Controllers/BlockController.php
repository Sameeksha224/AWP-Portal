<?php

namespace App\Http\Controllers;

use App\Models\Block;
use App\Models\BasinName;
use App\Models\BlockType;
use App\Models\SurveyType;
use Illuminate\Http\Request;
use App\Models\FinancialYear;
use App\Models\ProcessingType;

class BlockController extends Controller
{   
    //
    public function getBlockNames(){
        // $data = Block::select('block')->where('id',1)->get()->first();
        $data = Block::all();
        return $data;
    }

    public function getFinancialYear(){
        $data = FinancialYear::all();
        return $data;
    }

    public function getBlockTypes(){
        $data = BlockType::all();
        return $data;
    }

    public function getBasinNames(){
        $data = BasinName::all();
        return $data;
    }

    public function getProcType(){
        $data = ProcessingType::all();
        return $data;
    }

    public function getSurveyType(){
        $data = SurveyType::all();
        return $data;
    }
}
