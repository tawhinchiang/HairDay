import dayjs from "dayjs";

const form = document.querySelector('form');
const selectedDate = document.getElementById('date');
//data atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

//carrega data atual e define data minima para o input
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    //previne reload padrão
    event.preventDefault();




}