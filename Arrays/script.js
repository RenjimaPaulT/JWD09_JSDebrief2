let drivers = ['Sam','Peter','Jason','Adam','Jack']
function resetDrivers()
{
drivers = ['Jim','Jerry','John'];
console.log(drivers);
}
function appendArray()
{
    drivers.push('Jimmy');
    console.log(drivers);
}
function prependArray()
{
    drivers.unshift('Jacob');
    console.log(drivers);
}
function removeLast()
{
    drivers.pop();
    console.log(drivers);
}
function removeFirst()
{
    drivers.shift();
    console.log(drivers);
}
resetDrivers();
appendArray();
resetDrivers();
prependArray();
resetDrivers();
removeLast();
resetDrivers();
removeFirst();
resetDrivers();