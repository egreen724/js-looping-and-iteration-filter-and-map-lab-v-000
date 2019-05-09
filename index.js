// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue).map(d => d.name)
}

function exactMatch(drivers, object) {
  return drivers.filter(function(d) {
    let matches = false;

    for (const key in object) {
       matches = d[key] === object[key]
    }
    return matches
  });
}

function exactMatchToList(drivers, {attribute: value}) {
  return drivers.filter(function (d) {return d.attribute = d.value}).map(d => d.name)
}
