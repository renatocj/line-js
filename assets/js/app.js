
 google.charts.load('current', { packages: [ 'corechart' ] })
 google.charts.setOnLoadCallback(drawChart)

function drawChart() {
    const container = document.querySelector('#chart')
    const data = new google.visualization.arrayToDataTable([
        ['Período em anos', 'Índice Geral', 'Alimentação', 'Transporte', 'Educação'],
        ['2011', 4.28, 2.81, 3.87, 4.05 ],
        ['2012', 2.75, 4.82, 3.74, 2.89 ],
        ['2013', 3.89, 2.37, 4.15, 3.98 ],
        ['2014', 4.36, 7.56, 2.89, 4.84 ],
        ['2015', 7.48, 4.36, 3.84, 6.75 ],
        ['2016', 8.87, 5.23, 3.56, 5.89 ],
        ['2017', 6.52, 4.87, 4.75, 3.74 ],
        ['2018', 5.49, 6.35, 5.32, 4.78 ],
        ['2019', 4.74, 6.35, 4.56, 5.32 ],
        ['2020', 6.71, 3.78, 5.74, 5.87 ],
        ['2021', 9.76, 4.85, 6.78, 4.47 ]   
    ])
    const options = {
        title: 'Gráfico Tabela IPCA',
        subtitle: 'Análise Gráfica IPCA - 2011-2021',
        height: 420,   
    }
  
    //const chart = new google.visualization.ColumnChart(container)

    // outros exemplos de grafico

    //const chart = new google.visualization.BarChart(container)
    const chart = new google.visualization.LineChart(container)
    //const chart = new google.visualization.PieChart(container)
    chart.draw(data, options)
}