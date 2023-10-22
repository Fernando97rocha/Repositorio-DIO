package personal.todolistapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import personal.todolistapi.model.Tarefa;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long>{
}
