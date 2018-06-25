// Code your solution in this file!
function logDriverNames(arr){
  return arr.forEach(function(element){
    console.log(element.name);
  });
}

function logDriversByHometown(arr, town){
  return arr.forEach(function(element){
     if (element['hometown'] === town){
       console.log(element.name)
     }
  });
}

function driversByRevenue(drivers){
  let newDrivers = drivers.slice(0, drivers.length);
    return newDrivers.sort(function(a, b) {
       return a.revenue - b.revenue;
    });
  }


function driversByName(drivers){
  let newDrivers = drivers.slice(0, drivers.length);
    return newDrivers.sort(function(a, b) {
       return a.name > b.name;
    });
  }

  function totalRevenue(drivers){
    let newDrivers = drivers.slice(0, drivers.length);
      return newDrivers.reduce(function(total, currentDriver){
        return total + currentDriver.revenue;
      }, 0);
    }

  function averageRevenue(drivers){
    return totalRevenue(drivers)/ drivers.length;
  }
