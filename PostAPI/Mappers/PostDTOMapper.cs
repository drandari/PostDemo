namespace PostAPI
{
    public static class PostDTOMapper
    {
        public static PostDTO ToDto(this Post post)
        {
            return new PostDTO
            {
                Id = post.Id,
                Nombre = post.Nombre,
                Descripcion = post.Descripcion,
            };
        }

        public static Post ToPostEntity(this PostDTO model)
        {
            return new Post
            {
                Id = model.Id,
                Nombre = model.Nombre,
                Descripcion = model.Descripcion,
            };
        }

    }
}

