using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PostAPI
{
    public partial class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(255)]
        public string Nombre { get; set; } = String.Empty;

        [StringLength(255)]
        public string Descripcion { get; set; } = String.Empty;
    }
}
