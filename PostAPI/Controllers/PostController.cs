using Microsoft.AspNetCore.Mvc;

namespace PostAPI
{
    [ApiController]
    [EntityValidation]
    [Route("api/[controller]/[action]")]
    public class PostController : ControllerBase
    {
        private readonly IPostService _service;

        public PostController(IPostService service)
        {
            _service = service;
        }
        /// <summary>
        /// Método para recuperar listado de Posts
        /// </summary>
        /// <returns>Listado de Post</returns>
        [HttpGet]
        public Task<IEnumerable<Post>> GetListAsync()
        {
            return _service.GetListAsync(HttpContext.RequestAborted);
        }

        /// <summary>
        /// Método para agregar un Post
        /// </summary>
        /// <param name="post"></param>
        /// <returns>Instacia de Post ingresado</returns>
        [HttpPost]
        public Task<Post> AddAsync([FromBody] Post post)
        {
            return _service.AddAsync(post, HttpContext.RequestAborted);
        }

        /// <summary>
        /// Método para eliminar un Post
        /// </summary>
        /// <param name="id">Id del Post</param>
        /// <returns>Instancia del Post eliminado</returns>
        [HttpDelete]
        public Task<Post> DeleteAsync([FromQuery] int id)
        {
            return _service.DeleteAsync(id, HttpContext.RequestAborted);
        }
    }
}
