package personal.controller;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import personal.service.UserService;
import personal.todolistapi.model.Tarefa;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {
    
    private final UserService service;

    public TarefaController(UserService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> findById(@PathVariable Long id) {
        var tarefaPorId = service.findById(id);
        return ResponseEntity.ok(tarefaPorId);
    }

    @PostMapping
    public ResponseEntity<Tarefa> create(@RequestBody Tarefa novaTarefa) {
        var tarefa = service.create(novaTarefa);
        URI locaition = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(tarefa.getId())
            .toUri();
        return ResponseEntity.created(locaition).body(tarefa);
    }
}
