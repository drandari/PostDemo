using Microsoft.Extensions.DependencyInjection;
using PostAPI;

namespace PostAPI
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddProjectServices(this IServiceCollection services)
        {
            services.AddScoped<IPostService, PostService>();

            return services;
        }
    }
}
