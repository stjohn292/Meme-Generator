using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace memegenerator.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Memes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TopText = table.Column<string>(nullable: true),
                    ImagePath = table.Column<string>(nullable: true),
                    BottomText = table.Column<string>(nullable: true),
                    MemeId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Memes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Memes_Memes_MemeId",
                        column: x => x.MemeId,
                        principalTable: "Memes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Memes",
                columns: new[] { "Id", "BottomText", "ImagePath", "MemeId", "TopText" },
                values: new object[] { 1, "Is anybody in there?", "/Images/Grandma.jpg", null, "Hellooo.." });

            migrationBuilder.InsertData(
                table: "Memes",
                columns: new[] { "Id", "BottomText", "ImagePath", "MemeId", "TopText" },
                values: new object[] { 2, "for the money!", "/Images/money.jpg", null, "I'm just in this" });

            migrationBuilder.CreateIndex(
                name: "IX_Memes_MemeId",
                table: "Memes",
                column: "MemeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Memes");
        }
    }
}
