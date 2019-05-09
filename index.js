// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(d => d.revenue > revenue).map(d => d.name)
}

function exactMatch(driver, {attribute: value}) {
  return drivers.filter(d => d.attribute === value)
}
