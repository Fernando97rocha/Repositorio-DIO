package personal.service.impl;

import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import personal.service.UserService;
import personal.todolistapi.model.Tarefa;
import personal.todolistapi.repository.TarefaRepository;

// implementa a interface Service
@Service
public class UserServiceImpl implements UserService {

    private final TarefaRepository repository;

    public UserServiceImpl(TarefaRepository repository) {
        this.repository = repository;
    }

    @Override
    public Tarefa findById(Long id) {
        return repository.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @Override
    public Tarefa delete(Tarefa tarefa) {
        repository.delete(tarefa);
        return null;
    }

    @Override
    public Tarefa create(Tarefa novaTarefa) {
        if (novaTarefa.getId() != null && repository.existsById(novaTarefa.getId()))
            throw new IllegalArgumentException();
        return repository.save(novaTarefa);
    }
    
}
