// from data.js
var tableData = data;

//  HTML Table Variables
var table = d3.select('#ufo-table');
var tbody = d3.select("tbody");
var thead = d3.select("thead");

//  Button & Field Variables
var dateField = d3.select('#datetime').node().value;
var cityField = d3.select('#city').node().value;
var stateField = d3.select('#state').node().value;
var shapeField = d3.select('#shape').node().value;
var FilterBtn = d3.select('#filter-btn');

// Filter Function
function SameDate(data) {
    data.datetime === dateFieldVal};

// What happens when the button is clicked
function handleClick(){
    // output.tbody("");
    document.getElementById("tbody").innerHTML = ""
    var dateFieldVal = d3.select('#datetime').node().value;
    
    // Filter the raw data with the date entered in the form(dateField)
    var FilteredData = tableData.filter(SameDate);
    console.log(FilteredData);

// Populate Table

    FilteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};

// When filter button is clicked
FilterBtn.on("click", handleClick)