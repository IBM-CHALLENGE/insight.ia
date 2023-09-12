import env from "../../env.json";

export async function cadastrar(token, anuncio) {

    const response = await fetch(`${env.BASE_URL}/anuncio`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        },
        body: JSON.stringify(anuncio)
    });

    return response
}

export async function listarPorUsuario(token) {

    const response = await fetch(`${env.BASE_URL}/anuncio/usuario`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        }
    });

    return response
}

export async function deletar(token, id) { 

    const response = await fetch(`${env.BASE_URL}/anuncio/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        }
    });

    return response
}