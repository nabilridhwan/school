let circle1 = {
    radius: 10
}

let circle2 = {
    radius: 23
}

let circle3 = {
    radius: 125
}

console.log(circle1.radius)
console.log(circle2.radius)
console.log(circle3.radius)

circle2.radius = 25
console.log(circle2.radius)

console.log(Math.PI * (circle1.radius ** 2))
console.log(Math.PI * (circle2.radius ** 2))
console.log(Math.PI * (circle3.radius ** 2))

let rectangle1 = {
    width: 10,
    height: 20,
    findArea: function () {
        return this.width * this.height
    }
}
let rectangle2 = {
    width: 30,
    height: 40,
    findArea: function () {
        return this.width * this.height
    }
}

console.log(rectangle1.findArea())
console.log(rectangle2.findArea())