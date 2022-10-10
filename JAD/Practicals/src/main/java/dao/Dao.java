package dao;

import java.util.List;

public interface Dao<T> {
	List<T> getAll();
	void save(T entity);
	List<T> get(long id);
	List<T> get(String id);
}
