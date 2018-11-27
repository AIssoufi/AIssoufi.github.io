moment.locale("fr");


const margin = {
  top: 40,
  right: 20,
  bottom: 30,
  left: 40
};
const width = 20200 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const formatPercent = d3.format(".0%");

const x = d3.scale.ordinal()
  .rangeRoundBands([0, width], .1);

const y = d3.scale.linear()
  .range([height, 0]);

const xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom");

const yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .tickFormat(formatPercent);

const tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(dataset => {
    const nb = dataset.length / 10;
    let result = '<ul style="margin: 0; padding: 5px 10px;">';

    dataset.forEach(data => {
      result += `<li>${data.title}</li>`
    });

    result += '</ul>';
    result += `<span style='color:red'>${nb * 10}</span>
      <strong>sujet${nb * 10 > 1 ? 's' : ''} traité${nb * 10 > 1 ? 's' : ''}</strong>`
    return result;
  })

const svg = d3.select("body").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

fetch(`dataset.json`)
  .then(response => response.json())
  .then(dataset => dataset.map(item => {
    const parts = item.date.split("/");
    return Object.assign(item, { date: `${parts[2]}/${parts[1]}/${parts[0]}` })
  }))
  .then(dataset => dataset.sort((a, b) => new Date(a.date) - new Date(b.date)))
  .then(dataset => {
    console.log(dataset);
    return dataset;
  })
  .then(ordoredDataSetByDate => {
    console.log("data", ordoredDataSetByDate)


    // On compte le nombre de sujet traité par date
    let mappedData = new Map();
    ordoredDataSetByDate.forEach(item => {
      const key = item.date;
      if (mappedData.has(key)) {
        mappedData.get(key).push(item);
      } else {
        mappedData.set(key, [item]);
      }
    });
    const dataX = Array.from(mappedData.keys()).map(date => moment(date).format("ll"));
    const dataY = Array.from(mappedData.values());

    // affichage data
    x.domain(dataX);
    y.domain([0, d3.max(dataY, d => (d.length / 10))]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Nombre de sujet");

    svg.selectAll(".bar")
      .data(dataY)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => x(dataX[i]))
      .attr("width", x.rangeBand())
      .attr("y", d => {
        return y(d.length / 10)
      })
      .attr("height", d => {
        console.log("height : ", d.length / 10)
        return (height - y(d.length / 10))
      })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

  })
