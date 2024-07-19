using PostAPI;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace PostAPI
{
    public interface IPostService : IEntityServiceBase<Post, int>
    {
    }
}
