const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const startElements = document.querySelectorAll('.start');
startElements.forEach((el) => observer.observe(el));

const workElements = document.querySelectorAll('.work');
workElements.forEach((el) => observer.observe(el));