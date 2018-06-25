// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, hometown){
  drivers.filter(driver => driver.hometown === hometown).map(driver => console.log(driver.name));
}

function driversByRevenue(drivers){
  const driversCopy = [...drivers];
  return driversCopy.sort(function(driverA, driverB){
    return driverA.revenue - driverB.revenue;
  });
}

function driversByName(drivers){
  const driversCopy = [...drivers];
  return driversCopy.sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(acumulator, driver){
    return acumulator + driver.revenue;
  }, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
