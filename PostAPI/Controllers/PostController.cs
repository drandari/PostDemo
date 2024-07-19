using Microsoft.AspNetCore.Mvc;
using PostAPI;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

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

        [HttpGet]
        public Task<IEnumerable<Post>> GetListAsync()
        {
            return _service.GetListAsync(HttpContext.RequestAborted);
        }

        [HttpPost]
        public Task<bool> AddAsync([FromBody] Post post)
        {
            return _service.AddAsync(post, HttpContext.RequestAborted);
        }

        [HttpDelete]
        public Task<bool> DeleteAsync([FromQuery] int id)
        {
            return _service.DeleteAsync(id, HttpContext.RequestAborted);
        }
    }
}
