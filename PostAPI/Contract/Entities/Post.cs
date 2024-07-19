using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PostAPI
{
    public partial class Post
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        public string Nombre { get; set; } = String.Empty;

        [StringLength(255)]
        public string Descripcion { get; set; } = String.Empty;
    }
}
