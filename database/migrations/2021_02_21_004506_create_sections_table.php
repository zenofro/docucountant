<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionsTable extends Migration
{
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('project_id')->constrained()->onDelete('cascade');

            $table->string('title');
            $table->integer('order');
            $table->string('slug');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('project_sections');
    }
}
