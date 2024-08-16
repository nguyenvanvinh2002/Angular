window.onload = function() {
    function startCountdown(duration) {
        const hourElement = document.getElementById('countdown-hour');
        const minuteElement = document.getElementById('countdown-minute');
        const secondElement = document.getElementById('countdown-second');
        const targetTime = new Date().getTime() + duration * 1000;

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetTime - now;
            
            // Kiểm tra nếu distance là số hợp lệ
            if (isNaN(distance) || distance < 0) {
                hourElement.innerHTML = "00";
                minuteElement.innerHTML = "00";
                secondElement.innerHTML = "00";
                clearInterval(interval);
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Kiểm tra nếu hours, minutes, seconds là số hợp lệ
            hourElement.innerHTML = isNaN(hours) ? "00" : `${hours}`;
            minuteElement.innerHTML = isNaN(minutes) ? "00" : `${minutes}`;
            secondElement.innerHTML = isNaN(seconds) ? "00" : `${seconds}`;
        }

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Gọi ngay để hiển thị thời gian còn lại ngay lập tức
    }
    
    startCountdown(14400); // 4 giờ
  };
//   -----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            tabLinks.forEach(link => link.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            this.classList.add('active');
            target.classList.add('active');
        });
    });
});
