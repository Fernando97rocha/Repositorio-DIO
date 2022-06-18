//EVENT LISTENER in Javascript

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);
//o click ativa a função outraFuncao

// ATRIBUTO HTML


<html>
    <body>
        <h1 onclick="mudaTexto(this)">Clique aqui!</h1>

        <script>
            function mudaTexto(id) {
                id.innerHTML = "Mudei!"
            }
        </script>
    </body>
</html>