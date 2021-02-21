<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectSectionsTable extends Migration
{
    public function up()
    {
        Schema::create('project_sections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('project_id')->constrained();

            $table->string('title');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('project_sections');
    }
}
