function myTimer() {

    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function startTimer() {
        time = setInterval(function () {
            seconds++;
            timer.innerHTML = getTimeFromSeconds(seconds);
        }, 1000)
    }

    const timer = document.querySelector('.timer');
    let seconds = 0;
    let time;

    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('start')) {
            timer.classList.remove('paused');
            timer.classList.remove('cleared');
            timer.classList.add('started');
            clearInterval(time);
            startTimer();
        }
        if (element.classList.contains('pause')) {
            timer.classList.remove('started');
            timer.classList.remove('cleared');
            timer.classList.add('paused');
            clearInterval(time);
        }
        if (element.classList.contains('reset')) {
            timer.classList.remove('started');
            timer.classList.add('cleared');
            clearInterval(time);
            seconds = 0;
            timer.innerHTML = '00:00:00';
        }
    })
}

myTimer();


