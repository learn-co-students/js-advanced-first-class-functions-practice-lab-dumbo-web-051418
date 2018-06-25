// Code your solution in this file!
function logDriverNames(array) {
  array.forEach((e) => {
    console.log(e.name);
  })
};

function logDriversByHometown(array, town) {
  array.forEach((e) => {
    if (e.hometown === town) {
      console.log(e.name);
    }
  })
};

function driversByRevenue(array) {
  copiedArray = array.map((e) => {
    return e;
  });
  return copiedArray.sort((a,b) => {
    return a.revenue - b.revenue
  });
};

function driversByName(array) {
  return array.slice().sort((a,b) => {
    return a.name > b.name;
  });
};

function totalRevenue(array) {
  return array.reduce((sum, e, i, array) => {
    return sum + e.revenue
  }, 0);
};

function averageRevenue(array) {
  const total = totalRevenue(array);
  const average = total / array.length;
  return average;
};
