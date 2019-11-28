
  import React from 'react';
  import Plot from 'react-plotly.js';

  const Pie = (props) =>{
  return(
    <div class = "pie">
      <p>Number of repos for each language</p>
      <Plot data = {[
        {
          
          values: props.data,
          labels: props.labels,
        type : 'pie',
        textfont : {
          color : 'rgb(230,230,250)'
        }
      }
      ]}
    layout={{
        width: 600,
        height: 350,
        paper_bgcolor:'rgba(0,0,0,0)',
        plot_bgcolor:'rgba(0,0,0,0)',
    }}

/>
</div>
);
}

export default Pie;

