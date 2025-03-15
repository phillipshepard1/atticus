<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mixpost_admin_templates', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->unsignedBigInteger('tag_id');
            $table->string('name')->nullable();
            $table->json('content');
            $table->json('data')->nullable();
            $table->enum('status', ['publish', 'unpublish'])->default('publish');
            $table->timestamps();

            $table->foreign('tag_id')->references('id')->on('mixpost_admin_templates_tag');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mixpost_admin_templates');
    }
};
