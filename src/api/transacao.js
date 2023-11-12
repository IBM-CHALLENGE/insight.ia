import env from "../../env.json";

export async function transacoesByUser(token){
    const response = await fetch(`${env.BASE_URL}/transacao/usuario`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        }
    });

    return response
}

export async function cadastrarTransacao(token, transacao) {
    const response = await fetch(`${env.BASE_URL}/transacao`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        },
        body: JSON.stringify(transacao)
    })

    return response
}