var DonutMaster = function() {
  this.shopsArray = [];

  this.addShop = function(shopLocation, minCustomers, maxCustomers, avgCustomers) {
    var shop = new Shop(shopLocation, minCustomers, maxCustomers, avgCustomers);
    shop.donutsPerDay();

    console.log(shop);

    this.shopsArray.push(shop);
  };
  this.generateReport = function() {
    for (var i = 0; i < this.shopsArray.length; i++) {
      $("tbody").append("<tr id='" + i + "'></tr>");
      $("#" + i).append("<td> " + this.shopsArray[i].name + "  </td>");
      var shop = this.shopsArray[i];

      console.log(shop.name + " sold " + shop.totalDonuts + " in one day. That's " + shop.avgDonutPerHour + " per hour. BLESSED BE HE.")
    };
  };
}

var Shop = function(name, min, max, ave) {
  this.name = name;
  this.minCustomer = min;
  this.maxCustomer = max;
  this.avgCustomerSale = ave;
  this.hourlyDonutArray = [];
  this.totalDonuts = 0;
  this.avgDonutPerHour = 0;

  this.donutsPerHour = function() {
    return (Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer) * this.avgCustomerSale;
  };

  this.donutsPerDay = function() {

    for (var i = 0; i < 12; i++) {
      var currentHour = this.donutsPerHour();
      this.totalDonuts += currentHour;
      this.hourlyDonutArray.push(currentHour);
    };
    this.donutAvgPerHour();

  };
  this.donutAvgPerHour = function() {
    this.avgDonutPerHour = Math.ceil(this.totalDonuts / 10);
  };
}

var masterOfDonuts = new DonutMaster();

masterOfDonuts.addShop("Downtown", 8, 43, 4.5);
masterOfDonuts.addShop("Capitol Hill", 3, 37, 2.0);
masterOfDonuts.addShop("South Lake Union", 9, 23, 6.33);
masterOfDonuts.addShop("Wedgewood", 2, 28, 1.25);
masterOfDonuts.addShop("Ballard", 8, 58, 3.75);

console.log(masterOfDonuts.generateReport());
