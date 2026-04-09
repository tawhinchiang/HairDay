import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
const clientName = document.getElementById('client');
//data atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//carrega data atual e define data minima para o input
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    //previne reload padrão
    event.preventDefault();
    try {
        const name = clientName.value.trim();
        if (!name) {
            return alert("Informe o nome do cliente")

        }
        //recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")
        console.log(hourSelected);
        if (!hourSelected) {
            return alert("Selecione um horário")
        }

        //recuperar somente a hora 
        const [hour] = hourSelected.innerText.split(":")
        const when = dayjs(selectedDate.value).add(hour,"hour")

        //gera um ID
        const id = new Date().getTime();
        //faz o agendamento

        await scheduleNew({
            id,
            name,
            when
        })

        //recarregar os agendamentos
        await schedulesDay()

        //limpa o input de nome do cliente
        clientName.value = ""

    }
    catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
    }







}