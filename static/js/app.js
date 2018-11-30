// from data.js
var tableData = data;

//  HTML Table Variables
var table = d3.select('#ufo-table');
var tbody = d3.select("tbody");
var thead = d3.select("thead");

//  Button & Field Variables
var dateField = d3.select('#datetime');
var FilterBtn = d3.select('#filter-btn');

// Filter Function
function SameDate(entry) {
    entry.datetime === dateFieldVal};

// What happens when the button is clicked
function handleClick(){
    output.tbody("");
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