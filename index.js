// Code your solution in this file!
function logDriverNames (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

function logDriversByHometown (drivers, location) {
  drivers.forEach(function (driver){
    if (driver.hometown === location){
      console.log(driver.name);
    };
  });
};

function driversByRevenue (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
};

function driversByName (driver) {
  newArray = Object.assign([],driver);
  return newArray.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
};

function totalRevenue (drivers) {
  newArray = [...drivers];
  return newArray.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
};

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
