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
        Schema::create('mixpost_admin_media', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('name');
            $table->string('mime_type');
            $table->string('disk');
            $table->string('path');
            $table->json('data')->nullable();
            $table->unsignedBigInteger('size');
            $table->unsignedBigInteger('size_total');
            $table->json('conversions')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mixpost_admin_media');
    }
};
