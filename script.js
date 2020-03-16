const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


populateUI();
let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', moviePrice);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
     count.innerText = selectedSeatsCount;
     total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
}


movieSelect.addEventListener('change', function(e){
    ticketPrice = +e.target.value;
    updateSelectedCount();
})



container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
         updateSelectedCount();
    }
})


