import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//gera evento click para cada lista(manha.tarde e noite)

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //obtem a li do elemento pai clicado
            const item = event.target.closest("li")
            //pega o id do agendmento para remover
            const { id } = item.dataset

            //confirma se o usuario deseja cancelar o agendamento
            if (id) {
                const isConfirm = confirm("Deseja cancelar esse agendamento?")
                if (isConfirm) {
                    //faz requisição para cancelar o agendamento
                    await scheduleCancel(id)

                    //recarrega os agendamentos
                    schedulesDay()
                }
            }

        }
    })
}
)