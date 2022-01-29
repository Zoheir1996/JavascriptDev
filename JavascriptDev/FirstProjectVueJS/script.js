// fonction constructeur

function Dog( name, color, age)
{
    this.name= name
    this.color=color
    this.age = age
}

var petitCaniche = new Dog("Choupette", "White", 4);

console.log(petitCaniche);