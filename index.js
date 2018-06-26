// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)})
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {

  let driversRevenue = Object.assign([], drivers);
  // console.log(driversRevenue)
  // console.log(drivers)
  const numberSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };
  return driversRevenue.sort(numberSorter);
}

function driversByName(drivers) {
  let driversRevenue = Object.assign([], drivers);
  // console.log(driversRevenue)
  // console.log(drivers)
  const letterSorter = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  };
  return driversRevenue.sort(letterSorter);
}


function totalRevenue(drivers) {
  const getTotalRevenue = function(start, driver){
    return start + driver.revenue
  }
  return drivers.reduce(getTotalRevenue, 0);
}

function averageRevenue(drivers) {
  const revenue = totalRevenue(drivers);
  return revenue/drivers.length;

}
