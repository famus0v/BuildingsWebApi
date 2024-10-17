namespace BuildingsWebApi.DAL.Interfaces
{
    public interface IBaseRepository<T>
    {
        Task Add(T entity);
        Task<T?> Update(T entity);
        Task Delete(int id);
        Task<IEnumerable<T>> GetAll();
        Task<T?> GetById(int id);
    }
}
