using Microsoft.EntityFrameworkCore;
using PostAPI;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace PostAPI
{
    public class PostService : EntityServiceBase<Post, int>, IPostService
    {
        private readonly ICurrentUser _currentUser;

        public PostService(IUnitOfWork unitOfWork, ICurrentUser currentUser) : base(unitOfWork)
        {
            _currentUser = currentUser;
        }
    }
}
