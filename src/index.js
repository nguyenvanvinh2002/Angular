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
//-------------------
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

document.querySelectorAll('.price').forEach(function(priceElement) {
    let priceValue = parseInt(priceElement.textContent);
    priceElement.textContent = formatPrice(priceValue) + " VND";
});
// ---------------------
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.edit-hovaten').addEventListener('click', function() {
        var inputElement = document.querySelector('.hovaten');
        var btn = document.querySelector('.btn-hovaten');
        var btnclose = document.querySelector('.btn-dong');
        if (inputElement) {
            inputElement.style.border = '2px solid black'; 
            inputElement.removeAttribute('readonly'); 
            inputElement.focus(); 
        }
        if(btn){
            btn.style.display = 'flex';
        }
        if(btnclose){
            btnclose.style.display = 'flex';
        }
    });
    document.querySelector('.btn-dong').addEventListener('click',function(){
        var inputElement = document.querySelector('.hovaten');
        var btn = document.querySelector('.btn-hovaten');
        var btnclose = document.querySelector('.btn-dong');
        if(btnclose){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
        
    })
    document.querySelector('.btn-hovaten').addEventListener('click',function(){
        var inputElement = document.querySelector('.hovaten');
        var btn = document.querySelector('.btn-hovaten');
        var btnclose = document.querySelector('.btn-dong');
        if(btn){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
        
    })
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.edit-sodienthoai').addEventListener('click', function() {
        var inputElement = document.querySelector('.sodienthoai');
        var btn = document.querySelector('.btn-sodienthoai');
        var btnclose = document.querySelector('.btn-dong1');
        if (inputElement) {
            inputElement.style.border = '2px solid black'; 
            inputElement.removeAttribute('readonly'); 
            inputElement.focus(); 
        }
        if(btn){
            btn.style.display = 'flex';
        }
        if(btnclose){
            btnclose.style.display = 'flex';
        }
    });
    document.querySelector('.btn-dong1').addEventListener('click',function(){
        var inputElement = document.querySelector('.sodienthoai');
        var btn = document.querySelector('.btn-sodienthoai');
        var btnclose = document.querySelector('.btn-dong1');
        if(btnclose){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
    })
    document.querySelector('.btn-sodienthoai').addEventListener('click',function(){
        var inputElement = document.querySelector('.sodienthoai');
        var btn = document.querySelector('.btn-sodienthoai');
        var btnclose = document.querySelector('.btn-dong1');
        if(btn){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
    })
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.edit-email').addEventListener('click', function() {
        var inputElement = document.querySelector('.email');
        var btn = document.querySelector('.btn-email');
        var btnclose = document.querySelector('.btn-dong2');
        if (inputElement) {
            inputElement.style.border = '2px solid black'; 
            inputElement.removeAttribute('readonly'); 
            inputElement.focus(); 
        }
        if(btn){
            btn.style.display = 'flex';
        }
        if(btnclose){
            btnclose.style.display = 'flex';
        }
    });
    document.querySelector('.btn-dong2').addEventListener('click',function(){
        var inputElement = document.querySelector('.email');
        var btn = document.querySelector('.btn-email');
        var btnclose = document.querySelector('.btn-dong2');
        if(btnclose){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
    })
    document.querySelector('.btn-email').addEventListener('click',function(){
        var inputElement = document.querySelector('.email');
        var btn = document.querySelector('.btn-email');
        var btnclose = document.querySelector('.btn-dong2');
        if(btnclose){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.edit-diachi').addEventListener('click', function() {
        var inputElement = document.querySelector('.diachi');
        var btn = document.querySelector('.btn-diachi');
        var btnclose = document.querySelector('.btn-dong3');
        if (inputElement) {
            inputElement.style.border = '2px solid black'; 
            inputElement.removeAttribute('readonly'); 
            inputElement.focus(); 
        }
        if(btn){
            btn.style.display = 'flex';
        }
        if(btnclose){
            btnclose.style.display = 'flex';
        }
    });
    document.querySelector('.btn-dong3').addEventListener('click',function(){
        var inputElement = document.querySelector('.diachi');
        var btn = document.querySelector('.btn-diachi');
        var btnclose = document.querySelector('.btn-dong3');
        if(btnclose){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
    })
    document.querySelector('.btn-diachi').addEventListener('click',function(){
        var inputElement = document.querySelector('.diachi');
        var btn = document.querySelector('.btn-diachi');
        var btnclose = document.querySelector('.btn-dong3');
        if(btnclose){
            btnclose.style.display = 'none';
            btn.style.display = 'none';
            inputElement.style.border = 'none'; 
            inputElement.setAttribute('readonly', true);
        }
    })
});
