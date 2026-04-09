import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours.js'
import { hoursCLick } from './hours-click.js'
const hours = document.getElementById("hours")
export function hoursLoad(date) {

    //limpa a lista de horarios
    hours.innerHTML = ""
    
    const opening = openingHours.map((hour) => {
        //recupera somente a hora

        const [scheduleHour] = hour.split(":")

        //adiciona a hora na date e verificar se esta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        //define se o horario esta disponivel
        return {
            hour,
            available: isHourPast
        }
    })


    //rendriza os horarios
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour
        hours.append(li)

        if (hour ==="9:00"){
            hourHead("Manhã")
        
        }else if(hour === "13:00"){
            hourHead("Tarde")
        }
        else if(hour === "18:00"){
            hourHead("Noite")
        }
    });
//add o evento de click nos horarios disponiveis
    hoursCLick()

    function hourHead(title){
        const header = document.createElement("li")
        header.classList.add("hour-period")
        header.textContent = title

        hours.append(header)
    }
}
