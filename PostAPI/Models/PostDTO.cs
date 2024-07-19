using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PostAPI
{
    public class PostDTO
    {
        public int Id {get; set;}
        public string Nombre {get; set;}
        public string Descripcion {get; set;}
    }
}
