using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PostAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "public");

            migrationBuilder.CreateTable(
                name: "Post",
                schema: "public",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", precision: 32, scale: 0, nullable: false),
                    Nombre = table.Column<string>(type: "character varying", maxLength: 255, nullable: false),
                    Descripcion = table.Column<string>(type: "character varying", maxLength: 255, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Post", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Post",
                schema: "public");
        }
    }
}
