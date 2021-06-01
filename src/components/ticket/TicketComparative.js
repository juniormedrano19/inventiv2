import React from 'react';
import { Line, Bar, Pie, Doughnut,Radar } from 'react-chartjs-2';

export const TicketComparative = () => {
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
        <div>
            <div className="ticket__selectores-principal">
            <div className="ticket-form">
                <label for="typeof" className="ticket-label">Campos a comparar:</label>

<select id="typeof" className="ticket-select">
  <option value="volvo" selected>Campañas</option>
  <option value="saab">Fechas</option>
  <option value="audi" >Años</option>
  <option value="volvo" selected>Meses</option>
  <option value="saab">Supervisores</option>
  <option value="audi" >Conexiones</option>
</select>
                
                   
                   {/*  <input type="text" name="phone" id="phone" placeholder="+51 956632231" required="required" className="ticket-input" /> */}
                </div>
            </div>
            <div className="ticket__selectores">
                      <div className="ticket__selectores-part">
                      <div className="ticket-form">
          {/*       <label for="typeof" className="ticket-label">Campos a comparar:</label> */}

<select id="typeof" className="ticket-select">
  <option value="volvo" selected>Enero</option>
  <option value="saab">Febrero</option>
  <option value="audi" >Marzo</option>
  <option value="volvo" >Abril</option>
  <option value="saab">Mayo</option>
  <option value="audi" >Junio</option>
</select>
                
                   
                   {/*  <input type="text" name="phone" id="phone" placeholder="+51 956632231" required="required" className="ticket-input" /> */}
                </div>
                      </div>
                      {/*  */}
                      <div className="ticket__selectores-part">
                      <div className="ticket-form">
      {/*           <label for="typeof" className="ticket-label">Campos a comparar:</label> */}


                <select id="typeof" className="ticket-select">
  <option value="volvo" >Enero</option>
  <option value="saab" selected>Febrero</option>
  <option value="audi" >Marzo</option>
  <option value="volvo" >Abril</option>
  <option value="saab">Mayo</option>
  <option value="audi" >Junio</option>
</select>
                
                   
                   {/*  <input type="text" name="phone" id="phone" placeholder="+51 956632231" required="required" className="ticket-input" /> */}
                </div>
                      </div>
                      <div className="ticket__selectores-part">
                      <div className="ticket-form">
        {/*         <label for="typeof" className="ticket-label">Campos a comparar:</label> */}


        <select id="typeof" className="ticket-select">
  <option value="volvo" >Enero</option>
  <option value="saab">Febrero</option>
  <option value="audi"  selected>Marzo</option>
  <option value="volvo" >Abril</option>
  <option value="saab">Mayo</option>
  <option value="audi" >Junio</option>
</select>
                
                   
                   {/*  <input type="text" name="phone" id="phone" placeholder="+51 956632231" required="required" className="ticket-input" /> */}
                </div>
                      </div>
                  </div>
            <div>
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
        </div>
    )
}
