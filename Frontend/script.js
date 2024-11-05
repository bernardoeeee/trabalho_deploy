async function cadastrar(event) {
    event.preventDefault();

    const cpf = document.getElementById('cpfUsuario').value;
    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('password').value;

    const data = {cpf,nome,email,senha};

    const response = await fetch('http://localhost:3001/usuario/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    console.log(data)
    const results = await response.json();

    console.log(results);
    if(results.success) {
        alert(results.message)
    } else {
        alert(results.message)
    }
}
