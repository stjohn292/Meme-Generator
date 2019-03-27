using Microsoft.EntityFrameworkCore.Migrations;

namespace memegenerator.Migrations
{
    public partial class UpdateModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Memes_Memes_MemeId",
                table: "Memes");

            migrationBuilder.DropIndex(
                name: "IX_Memes_MemeId",
                table: "Memes");

            migrationBuilder.DropColumn(
                name: "MemeId",
                table: "Memes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MemeId",
                table: "Memes",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Memes_MemeId",
                table: "Memes",
                column: "MemeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Memes_Memes_MemeId",
                table: "Memes",
                column: "MemeId",
                principalTable: "Memes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
