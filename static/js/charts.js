//Part 1
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//     "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "Bar Chart"
// };

// Plotly.newPlot("plot", data, layout);


// // Part 2 - Adding attributes
var trace1 = {
  x: ["United States", "United Kingdom", "Germany", "France",
       "Italy", "Sweden", "China", "Russia", "Norway","Canada"],
  y: [2827,883,855,840,701,652,608,546,520,201],
  type: "bar"
};

//console.log("abc")

var data = [trace1];

var layout = {
  title: "Most Medals Won",
  xaxis: { title: "Country"},
  yaxis: { title: "Total Medals"}
};

Plotly.newPlot("plot", data, layout);


// // Part 3 - Line Chart
d3.json("http://127.0.0.1:5000/woman").then(function(data) {
    console.log(data);
    var trace1 = {
      x: data.Games,
      y: data.W_Count,
      type: "line"
    };
    
    // var trace2 = {
    //   x: data.Games,
    //   y: data.M_Count,
    //   type: "line"
    // };

    var data = [trace1];
    //var data = [trace1, trace2];

    var layout = {
      title: "Women Participation",
    };
    
    Plotly.newPlot("plot2", data, layout);
  });


// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);


// // Part 5 - Working Pie Chart
// var trace1 = {
//   labels: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: 'pie'
// };

// var data = [trace1];

// var layout = {
//   title: "'Pie' Chart",
// };

// Plotly.newPlot("plot3", data, layout);

// line of min and max ages

d3.json("http://127.0.0.1:5000/age").then(function(data) {
    console.log(data);
    var trace1 = {
      x: data.Games,
      y: data.min_ages,
      type: "line",
      name: "Youngest"
    };
    var trace2 = {
      x: data.Games,
      y: data.max_ages,
      type: "line",
      name: "Oldest"
    };
    var data = [trace1,trace2];
    
    var layout = {
      title: "Youngest and Oldest Olympians",
    };
    
    Plotly.newPlot("plot3", data, layout);
  });
