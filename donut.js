window.onload = function(){
  var StoreLocation = function(name, hours, avgDonutsPerCust, minCust, maxCust){
    this.name = name;
    this.hours = hours;
    this.avgDonutsPerCust = avgDonutsPerCust;
    this.minCust = minCust;
    this.maxCust = maxCust;

    this.donutsPerHour = [];
    this.custPerHour = [];
    this.totalDonuts = this.calcDailyDonuts();
  }

  StoreLocation.prototype.calcDailyDonuts = function() {
    var totalDaily = 0;
    for(var i = 0; i < this.hours.length; i++){
      var donutsPerHour = this.calcHourlyDonuts(i)
      this.donutsPerHour[i] = donutsPerHour;
      totalDaily += donutsPerHour;
    }
    return totalDaily;
  }

  StoreLocation.prototype.calcHourlyDonuts = function(hour) {
    this.custPerHour[hour] = this.minCust + Math.floor(Math.random() * (this.maxCust - this.minCust));
    return this.custPerHour[hour] * this.avgDonutsPerCust;
  }

  StoreLocation.prototype.renderToTable = function() {
    var row, locationsTable, locationName, donutsColumn, locationTotal;

    locationName = document.createElement("td");
    locationName.textContent = this.name;
    
    row = document.createElement("tr");
    row.appendChild(locationName);
    
    locationsTable = document.getElementById("locations_table");
    locationsTable.appendChild(row);
    
    for(var i = 0; i < hours.length; i++){
      donutsColumn = document.createElement("td");
      donutsColumn.innerHTML = 
        '<span class="hourly-donuts">' + this.donutsPerHour[i] + '</span>' +
        '<span class="hourly-customers">' + this.custPerHour[i] + '</span>';

      row.appendChild(donutsColumn);
    }
    
    locationTotal = document.createElement("td");
    locationTotal.textContent = this.totalDonuts;  

    row.appendChild(locationTotal);
  };

  var hours=["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

  var locations = [];

  locations.push(new StoreLocation("Downtown", hours, 3, 10, 25));
  locations.push(new StoreLocation("Capitol Hill", hours, 4, 15, 50));
  locations.push(new StoreLocation("Bothell", hours, 2, 5, 27));
  locations.push(new StoreLocation("Auburn", hours, 3, 8, 15));
  locations.push(new StoreLocation("Bellevue", hours, 4, 15, 40));

  var hoursOperation = document.getElementById("hours_operation");

  var locationsHead = document.createElement("th");
  hoursOperation.appendChild(locationsHead);
  locationsHead.textContent = "LOCATION";

  for(var i = 0; i < hours.length; i++){
    var tableHead = document.createElement("th");
    hoursOperation.appendChild(tableHead);
    tableHead.textContent = hours[i];
  }

  var totalHead = document.createElement("th");
  hoursOperation.appendChild(totalHead);
  totalHead.textContent = "TOTAL";

  for(var i = 0; i < locations.length; i++){
    locations[i].renderToTable();
  }


  var toggleData = function(e) {
    if (e.fromElement.tagName == 'TD') {
      if (e.fromElement.firstChild.style.display == 'none') {
        e.fromElement.firstChild.style.display = '';
        e.fromElement.lastChild.style.display = 'none';
      } else {
        e.fromElement.firstChild.style.display = 'none';
        e.fromElement.lastChild.style.display = 'block';
      };
    };
  }

  table = document.querySelector('table');
  table.addEventListener('mouseover', toggleData, false);
}






















