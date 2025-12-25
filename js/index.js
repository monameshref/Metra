//! AOS library
// AOS.init();


//! Close & Open Sidebar-Responsive
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function(){
  sidebar.classList.toggle("responsive");
});


//! =============== Active-Link (Side-Bar) =============== //
const navLink = document.querySelectorAll('.sidebar-content ul.links li')

function linkColor(){
    navLink.forEach(link => link.classList.remove('active-link'))
    this.classList.add('active-link')
}
navLink.forEach(link => link.addEventListener('click', linkColor));


//! =============== Banner =============== //
$(document).ready(function(){
    $(".user-insights .owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:false,
        dots: true,
        nav: false,
        // rtl: true,
        margin: 30,
    });
});


//! ===============  Chart.JS =============== //
const ctx = document.getElementById('performanceChart').getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(147, 51, 205, 0.30)');
  gradient.addColorStop(1, 'rgba(147, 51, 205, 0)');

  // بيانات مختلفة لكل اختيار
  const chartData = {
    'Last 8 Months': [32, 40, 26, 48.5, 35, 62, 45, 82],
    'Last Year': [28, 35, 42, 50, 38, 60, 55, 70],
    'Last 4 Months': [40, 45, 50, 60]
  };

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        data: chartData['Last 8 Months'],
        fill: true,
        backgroundColor: gradient,
        borderColor: '#9333CD',
        borderWidth: 2,
        tension: 0.6,
        pointRadius: (ctx) => ctx.dataIndex === 3 ? 6 : 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#F4C430',
        pointBorderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#F5F1FF',
          titleColor: '#000',
          bodyColor: '#000',
          padding: 12,
          displayColors: false,
          cornerRadius: 12,
          callbacks: { label: (ctx) => `Performance ${ctx.raw}%` }
        }
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          min: 0,
          max: 100,
          ticks: { stepSize: 25, callback: value => value + '%' }
        }
      }
    }
  });

  const select = document.querySelector('.chart-header select');

  select.addEventListener('change', (e) => {
    const selected = e.target.value;
    myChart.data.datasets[0].data = chartData[selected];

    if (selected === 'Last 4 Months') {
      myChart.data.labels = ['May', 'Jun', 'Jul', 'Aug'];
    } else {
      myChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    }

    myChart.update();
  });






