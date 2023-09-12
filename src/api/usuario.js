import env from '../../env.json'

export async function cadastrar(usuario) {

    const response = await fetch(`${env.BASE_URL}/usuario/cadastrar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    return response
}

export async function logar(usuario) {

    const response = await fetch(`${env.BASE_URL}/usuario/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    return response
}

export async function buscar(token){

    const response = await fetch(`${env.BASE_URL}/usuario`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        }
    })

    return response
}

export async function deletar(token) {

    const response = await fetch(`${env.BASE_URL}/usuario`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        }
    })

    return response
}

export async function atualizar(token, usuario) {
    
        const response = await fetch(`${env.BASE_URL}/usuario`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token.prefix} ${token.token}`
            },
            body: JSON.stringify(usuario)
        })
    
        return response
}