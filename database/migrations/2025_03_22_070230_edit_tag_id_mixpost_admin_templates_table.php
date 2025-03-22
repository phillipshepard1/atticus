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
        Schema::table('mixpost_admin_templates', function (Blueprint $table) {
            $table->dropForeign('mixpost_admin_templates_tag_id_foreign');

            $table->foreign('tag_id')->references('id')->on('mixpost_admin_templates_tag')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('mixpost_admin_templates', function (Blueprint $table) {
            $table->dropForeign('mixpost_admin_templates_tag_id_foreign');

            $table->foreign('tag_id')->references('id')->on('mixpost_admin_templates_tag');
        });
    }
};
