// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue).map(d => d.name)
}

function exactMatch(drivers, {key: value}) {
  return drivers.filter(d => d[key] = d.value})
}

function exactMatchToList(drivers, {attribute: value}) {
  return drivers.filter(function (d) {return d.attribute = d.value}).map(d => d.name)
}
