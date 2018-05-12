/*
10.
Write a constructor function that creates points in space. Each point in space has its own x, y, and z 
coordinate. For example, (3, 5, 1) can be a point in space.
Write a function that calculates the distance between two points in the space. 

*/


function Position1(x, y, z) {
    this.x1 = x
    this.y1 = y
    this.z1 = z
}
var position1 = new Position1(2, 5, 1)

function Position2(x, y, z) {
    this.x2 = x
    this.y2 = y
    this.z2 = z
}

var position2 = new Position2(4, 7, 3)

var distance = ({ x1, y1, z1 }, { x2, y2, z2 }) => {
    console.log((x2 - x1))
    var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
    return distance;
}

console.log(distance(position1, position2))


function Position1(x) {
    this.x1 = x

}
var position1 = new Position1(2)

function Position2(x) {
    this.x2 = x

}

var position2 = new Position2(6)

var distance = ({ x1 }, { x2 }) => {
    let distance = Math.sqrt(Math.pow((x2 - x1), 2));
    return distance;
}

console.log(distance(position1, position2))