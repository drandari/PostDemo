namespace PostAPI
{
    public interface IEntityServiceBase<TEntity, TKey> where TEntity : class
    {
        Task<TEntity> AddAsync(TEntity entity, CancellationToken cancellationToken = default);

        Task<bool> AddRangeAsync(
            IEnumerable<TEntity> entities, CancellationToken cancellationToken = default);

        Task<TEntity> DeleteAsync(TKey key, CancellationToken cancellationToken = default);

        Task<TEntity> UpdateAsync(TEntity entity, CancellationToken cancellationToken = default);

        Task<bool> UpdateRangeAsync(
            IEnumerable<TEntity> entities, CancellationToken cancellationToken = default);

        Task<TEntity?> GetAsync(TKey key, CancellationToken cancellationToken = default);

        Task<IEnumerable<TEntity>> GetListAsync(CancellationToken cancellationToken = default);

        Task<PagedResult<TEntity>> GetPageAsync(
            PageParameter parameter, CancellationToken cancellationToken = default);

        Task<int> CountAsync(CancellationToken cancellationToken = default);
    }
}
