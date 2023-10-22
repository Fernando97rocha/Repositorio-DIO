package personal.service;

import personal.todolistapi.model.Tarefa;

public interface UserService {
    
    public Tarefa findById(Long id);

    public Tarefa delete(Tarefa tarefa);

    public Tarefa create(Tarefa novaTarefa);
}
