// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue).map(d => d.name)
}

function exactMatch(drivers, object) {
  return drivers.filter(d => where d.object.key === d.object.value})
}

function exactMatchToList(drivers, {attribute: value}) {
  return drivers.filter(function (d) {return d.attribute === value}).map(d => d.name)
}
