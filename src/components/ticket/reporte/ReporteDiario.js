import React from 'react'

export const ReporteDiario = () => {

    const date= new Date();

    const fecha = date.getDate();
    const month = date.getMonth();
    const year= date.getFullYear();
    const hoy = `${fecha}/${month}/${year}`;



    return (
        <div className="ticket__graph-tabla">
            <div className="ticket__font-cabecera">{hoy}</div>
            <div className="row subir">
<div className="ticket__div">
<table 
className="table table-bordered table-responsive-md text-center ticket__graph-data"
id="tablaInventario"
>

<thead>
    <tr className="ticket__graph-data">
      <td scope="col" className="ticket__graph-data">#</td>
      <td scope="col" className="ticket__graph-data">Nombres y Apellidos</td>
      <td scope="col" className="ticket__graph-data">Dirección Ip VPN</td>
      <td scope="col" className="ticket__graph-data">Supervisor</td>
      <td scope="col" className="ticket__graph-data">Descarga (↓)</td>
      <td scope="col" className="ticket__graph-data">Carga (↑)</td>
      <td scope="col" className="ticket__graph-data">Tipo de conexión</td>
      <td scope="col" className="ticket__graph-data">190.12.66.242</td>
      <td scope="col" className="ticket__graph-data">190.119.245.122</td>
      <td scope="col" className="ticket__graph-data">Gateway</td>
      <td scope="col" className="ticket__graph-data">192.9.100.62</td>
      <td scope="col" className="ticket__graph-data">192.9.100.201</td>
      <td scope="col" className="ticket__graph-data">8.8.8.8</td>
      <td scope="col" className="ticket__graph-data">Día</td>
      <td scope="col" className="ticket__graph-data">Hora</td>
      <td scope="col" className="ticket__graph-data">Acción</td>
    </tr>
  </thead>
  <tbody>
  <tr >


<th scope="row" className="ticket__graph-data1">1</th>
<td className="ticket__graph-data1">Junior Medrano</td>
<td className="ticket__graph-data1">192.168.0.58</td>
<td className="ticket__graph-data1">---</td>
<td className="ticket__graph-data1">30 Mbps</td>
<td className="ticket__graph-data1">20 Mbps</td>
<td className="ticket__graph-data1">Ethernet</td>
<td className="ticket__graph-data1">25%</td>
<td className="ticket__graph-data1">25%</td>
<td className="ticket__graph-data1">25%</td>
<td className="ticket__graph-data1">25%</td>
<td className="ticket__graph-data1">25%</td>
<td className="ticket__graph-data1">25%</td>
<td className="ticket__graph-data1">17/05/2021</td>
<td className="ticket__graph-data1">14:35</td>
<td className="ticket__graph-data1">
<div className="separacion">
<button 
className="btn btn-danger ml-1 mr-1"
> Borrar </button>
<button type="button" class="btn btn-success">Editar</button>

</div>
</td>

</tr>
  </tbody>
  </table>
  </div>
  </div>
        </div>
    )
}
