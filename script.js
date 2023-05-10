


//d1
const day_input = document.querySelector('#day-input')
//m1
const month_input = document.querySelector('#month-input')
//y1
const year_input = document.querySelector('#year-input')

const dayTitle = document.querySelector('.day');
const monthTitle = document.querySelector('.month');
const yearTitle = document.querySelector('.year');

const days = document.querySelector('#days')
const months = document.querySelector('#months')
const years = document.querySelector('#years')

const calculatorBtn = document.querySelector('.calculator')


let dateNow = new Date();



calculatorBtn.addEventListener('click', calculator)

function calculator() {
    // var date = new Date();
    var d2 = dateNow.getDate();
    var m2 = 1 + dateNow.getMonth();
    var y2 = dateNow.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day_input.value > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (month_input.value > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - day_input.value;
    var m = m2 - month_input.value;
    var y = y2 - year_input.value;
    console.log(d, m, y)

    // Days
    if (day_input.value != '' && day_input.value <= 31) {

        days.innerText = d;
        day_input.classList.remove('active');
        dayTitle.classList.remove('active');
        dayTitle.classList.remove('active-greaterThan');
    }
    else {
        if (day_input.value > 31) {
            dayTitle.classList.add('active-greaterThan');
        }
        day_input.classList.add('active');
        dayTitle.classList.add('active');
        days.innerText = '- -'
    }

    // Months
    if (month_input.value != '' && month_input.value <= 12) {

        months.innerText = m;
        month_input.classList.remove('active');
        monthTitle.classList.remove('active');
        monthTitle.classList.remove('active-greaterThan');
    }
    else {
        if (month_input.value > 12) {
            monthTitle.classList.add('active-greaterThan');
        }
        month_input.classList.add('active');
        monthTitle.classList.add('active');
        months.innerText = '- -'
    }

    // Years
    if (year_input.value != '' && year_input.value < dateNow.getFullYear()) {
        years.innerText = y;
        year_input.classList.remove('active');
        yearTitle.classList.remove('active');
        yearTitle.classList.remove('active-greaterThan');
    }
    else {
        if (year_input.value > dateNow.getFullYear()) {
            yearTitle.classList.add('active-greaterThan');
        }
        year_input.classList.add('active');
        yearTitle.classList.add('active');
        years.innerText = '- -'
    }
    if (day_input.value > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
        alert(5)
    }
    if (month_input.value > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }




}