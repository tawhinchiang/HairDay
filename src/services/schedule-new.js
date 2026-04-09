import { apiConfig } from "./api-config";  
export async function scheduleNew({id,name,when}){
    try{
        //buscando requisição
    await fetch(`${apiConfig.baseUrl}/schedules`,{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id,
            name,
            when
        })

    })
    //exibe mensagem de agendamento realizado
    alert("Agendamento realizado com sucesso")
    }catch(error){
        console.log(error);
        alert("Não foi possível realizar o agendamento") 
    }

}