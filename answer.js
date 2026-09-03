// Question No. 1: Value Detective
function describeValue(val) {
  const type = typeof val;
  const truthiness = val ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}