document.addEventListener('DOMContentLoaded', function() {
    // Configuración de partículas
    particlesJS('bg-particles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#64ffda" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#64ffda", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Funcionalidad del menú "hamburguesa" para dispositivos móviles
    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navList = document.getElementById('nav-list');
        navList.classList.toggle('show');
    });

    // Datos de ejemplo
    const dates = ['2023-05-01', '2023-05-02', '2023-05-03', '2023-05-04', '2023-05-05'];
    const prices = [100, 102, 98, 103, 105];
    const ohlc = [
        [100, 103, 99, 102],
        [102, 104, 100, 101],
        [101, 102, 97, 98],
        [98, 105, 98, 103],
        [103, 107, 102, 105]
    ];

    // Gráfico de ejemplo
    const exampleOptions = {
        series: [{
            name: 'Precio',
            data: prices
        }],
        chart: {
            type: 'area',
            height: 350,
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: dates,
            labels: { style: { colors: '#ccd6f6' } }
        },
        yaxis: {
            labels: { style: { colors: '#ccd6f6' } }
        },
        colors: ['#64ffda']
    };
    new ApexCharts(document.querySelector("#example-chart"), exampleOptions).render();

    // Gráfico de Líneas
    const lineOptions = {
        series: [{
            name: 'Precio',
            data: prices
        }],
        chart: {
            type: 'line',
            height: '100%',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            }
        },
        xaxis: {
            categories: dates,
            labels: { style: { colors: '#ccd6f6' } }
        },
        yaxis: {
            labels: { style: { colors: '#ccd6f6' } }
        },
        colors: ['#64ffda']
    };
    new ApexCharts(document.querySelector("#lineChart"), lineOptions).render();

    // Gráfico de Barras
    const barOptions = {
        series: [{
            name: 'Precio',
            data: ohlc
        }],
        chart: {
            type: 'bar',
            height: '100%',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            }
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -100,
                        to: 0,
                        color: '#F15B46'
                    }, {
                        from: 0,
                        to: 100,
                        color: '#64ffda'
                    }]
                },
                columnWidth: '80%',
            }
        },
        xaxis: {
            categories: dates,
            labels: { style: { colors: '#ccd6f6' } }
        },
        yaxis: {
            labels: { style: { colors: '#ccd6f6' } }
        },
    };
    new ApexCharts(document.querySelector("#barChart"), barOptions).render();

    // Gráfico de Velas
    const candlestickOptions = {
        series: [{
            data: ohlc.map((d, i) => ({
                x: new Date(dates[i]).getTime(),
                y: d
            }))
        }],
        chart: {
            type: 'candlestick',
            height: '100%',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            }
        },
        xaxis: {
            type: 'datetime',
            labels: { style: { colors: '#ccd6f6' } }
        },
        yaxis: {
            labels: { style: { colors: '#ccd6f6' } }
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#64ffda',
                    downward: '#F15B46'
                }
            }
        }
    };
    new ApexCharts(document.querySelector("#candlestickChart"), candlestickOptions).render();

    // Gráfico de indicadores
    const indicatorOptions = {
        series: [{
            name: 'Precio',
            type: 'line',
            data: prices
        }, {
            name: 'RSI',
            type: 'line',
            data: [30, 45, 55, 70, 60]
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: dates,
            labels: { style: { colors: '#ccd6f6' } }
        },
        yaxis: [
            {
                title: {
                    text: 'Precio',
                    style: { color: '#64ffda' }
                },
                labels: { style: { colors: '#ccd6f6' } }
            },
            {
                opposite: true,
                title: {
                    text: 'RSI',
                    style: { color: '#F15B46' }
                },
                labels: { style: { colors: '#ccd6f6' } }
            }
        ],
        colors: ['#64ffda', '#F15B46']
    };
    new ApexCharts(document.querySelector("#indicator-chart"), indicatorOptions).render();

    // Gráfico de caso de estudio
    const caseStudyOptions = {
        series: [{
            name: 'Bitcoin',
            data: [30000, 29000, 28000, 27500, 29000, 31000, 33000]
        }],
        chart: {
            type: 'area',
            height: 350,
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7'],
            labels: { style: { colors: '#ccd6f6' } }
        },
        yaxis: {
            labels: { style: { colors: '#ccd6f6' } }
        },
        colors: ['#64ffda'],
        annotations: {
            points: [{
                x: 'Día 4',
                y: 27500,
                marker: {
                    size: 8,
                    fillColor: '#F15B46',
                    strokeColor: '#fff',
                    radius: 2
                },
                label: {
                    borderColor: '#F15B46',
                    text: 'Punto de entrada'
                }
            }]
        }
    };
    new ApexCharts(document.querySelector("#case-study-chart"), caseStudyOptions).render();
});
