var Person = function(config) {
  this.name = config.name;
  this.age = config.age;
  this.occupation = config.occupation;
};

Person.prototype.work = function() {
  return this.name + ' is working';
};

var person = new Person({
    name: 'Khoi',
    age: 13,
    occupation: 'IT Employee'
  }),
  status = person.work();

  console.log(status);

