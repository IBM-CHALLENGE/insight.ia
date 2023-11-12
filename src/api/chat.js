import env from "../../env.json";

export async function mensagensByChat(token, chatId) {

    const response = await fetch(`${env.BASE_URL}/chat/${chatId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        }
    });

    return response
}

export async function enviarMensagem(token, mensagem, chatId) {
    const response = await fetch(`${env.BASE_URL}/chat/${chatId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token.prefix} ${token.token}`
        },
        body: JSON.stringify(mensagem)
    })

    return response
}