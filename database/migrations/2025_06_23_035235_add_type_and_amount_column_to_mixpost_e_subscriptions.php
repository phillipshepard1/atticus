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
        Schema::table('mixpost_e_subscriptions', function (Blueprint $table) {
            $table->string('type')->after('name')->nullable();
            $table->bigInteger('amount')->after('quantity')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('mixpost_e_subscriptions', function (Blueprint $table) {
            $table->dropColumn('type');
            $table->dropColumn('amount');
        });
    }
};
