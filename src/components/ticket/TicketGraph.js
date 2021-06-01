import React from 'react';
import { Line, Bar, Pie, Doughnut,Radar } from 'react-chartjs-2';

export const TicketGraph = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
    return (
        <div className="ticket__graph-principal">
            <div>
            <div class="flexbox">
  <div class="search">
    <h1>Busca algo en las gráficas</h1>
    <h3>Dale click al ícono de buscar, luego escribe con el teclado.</h3>
    <div>
      <input type="text" placeholder="Search . . ." required />
    </div>
  </div>
</div>
            </div>
            <div className="ticket__graph-main">
            <div className="ticket__graph-secondary">
              <div className="ticket__graph-second">
                Tipo de conexión
              </div>
              <div>

        {/* ---------------------- */}
              <div className='header'>
      <h1 className='title'>Pie Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Pie data={data} />
     {/* ---------------------- */}
              </div>
            </div>
          <div className="ticket__graph-secondary">
          <div className="ticket__graph-second">
        Supervisores
</div>
<div>

  {/* DOUGHNUT CHART */}
<div className='header'>
      <h1 className='title'>Doughnut Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Doughnut data={data} />
     {/* ---------------------- */}
</div>
          </div>
            </div>
            <div  className="ticket__graph-main">
         
          <div className="ticket__graph-third">
          <div className="ticket__graph-second">
Registros de Incidencias de Red
</div>
<div>
   {/* ---------------------- */}
<div className='header'>
      <h1 className='title'>Vertical Bar Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Bar data={data} options={options} />
     {/* ---------------------- */}
</div>
          </div>
            </div>
            <div  className="ticket__graph-main">
         
          <div className="ticket__graph-third">
          <div className="ticket__graph-second">
          Registro de campañas
</div>
<div>
<div className='header'>
      <h1 className='title'>Grouped Bar Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/GroupedBar.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Bar data={data} options={options} />
</div>
          </div>
            </div>
            <div  className="ticket__graph-main">
            <div className="ticket__graph-secondary">
            <div className="ticket__graph-second">
            Registro de Incidencias de Red por hora

</div>
<div>
<div className='header'>
      <h1 className='title'>Radar Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Radar.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Radar data={data} options={options} />
</div>
            </div>
          <div className="ticket__graph-secondary">
          <div className="ticket__graph-second">
        Velocidad de Internet (Mb)
</div>
<div>
  {/* ------------------------------- */}
<div className='header'>
      <h1 className='title'>Line Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Line data={data} options={options} />
    {/* -------------------------------- */}
</div>
          </div>
          
            </div>
    
        </div>
    )
}
