 // function buildMetadata(sample){
//     d3.json("static/js/samples.json").then((data)=> {
//         var metadata = data.metadata;
//         var filteredData = metadata.filter(x => x.id == sample);
//         var results = filteredData[0];
//         var demoPanel = d3.select("#sample-metadata");
//         demoPanel.html("");
//         Object.entries(results).forEach(([key, value])=>{
//             demoPanel
//             .append("h6")
//             .text(`${key.toUpperCase()}: ${value}`);
//         });
                 
//     });


//   }


//  function buildCharts(sample) {
//      d3.json("static/js/samples.json").then((data)=> {
//         var samples= data.samples;
         
//         var filteredData=samples.filter(x => x.id == sample)
        

//         var results= filteredData[0];

//         var ids = results.otu_ids;
//         var labels = results.otu_labels;
//         var values = results.sample_values;

        
//         var bar_data =[
//             {
//                 y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
//                 x:values.slice(0,10).reverse(),
//                 text:labels.slice(0,10).reverse(),
//                 type: "bar",
//                 orientation:"h"

//             }

//         ];

//         var barLayout = {
//             title: "Top 10 OTUs found in an individual",
//             margin: { t:30, l:150 }

//         }
        
//         Plotly.newPlot("bar", bar_data, barLayout);

//         var bubbleLayout = {
//             title:"Bacteria Cultures Per Sample",
//             margin:{t:0},
//             xaxis: {title: "OTU IDs"},
//             hovermode: "closet",
//         };
//         var bubbleData = [{
//             x: ids,
//             y: values,
//             text: labels,
//             mode: "markers",
//             marker: {
//                 color: ids,
//                 size:values,
//             }
//         }
//         ]

//         Plotly.plot("bubble", bubbleData, barLayout);

       

//      });
//  }


    function init(){
    var mySelect = d3.select("#selDataset");
    d3.csv("new_athletes_events.csv").then(function(data) {
        console.log(data);
    });
        

        

        // var selectedYear = data.Year;
        // selectedYear.forEach((year)=>{
        //     mySelect
        //     .append("option")
        //     .text(year)
        //     .property("value",year);
    // });
   
    
// //         var firstSample = sampleNames[0];
// //         buildMetadata(firstSample);
// //         buildCharts(firstSample)
// });
// }
// //     function optionChanged(newSample){
// //         buildMetadata(newSample);
// //         buildCharts(newSample)
    // }


    // init();

