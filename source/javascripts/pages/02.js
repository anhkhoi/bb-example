// Person Model
var Person = Backbone.Model.extend({
	defaults: {
		name: 'Khoi',
		age: 22,
		occoputation: 'IT Manager'
	},
	validate: function(attributes) {
    if (attributes.age < 0) {
      return 'Age must be positive';
    }
    if (!attributes.name) {
      return 'Every person must have a name';
    }
	},
	work: function() {
		return this.get('name') + ' is working.'
	}
});

// person.on('error', function(model, error) {
//   console.log(error);
// });

// Person View
var PersonView = Backbone.View.extend({
  el: 'body',
  tagName: 'li',
  insideTemplate: _.template("<strong><%= name %></strong> - <%= age %> - <%= occoputation %>"),
  outsideTemplate: Handlebars.compile($("#personTemplate").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    // Method 1
    // var str = this.model.get('name') + ' - ' + this.model.get('age') + ' - ' + this.model.get('occoputation');
    // this.$el.html(str);

    // Method 2
    // var template = this.insideTemplate(this.model.toJSON());
    // this.$el.html(template);

    // Method 3
    // var template = this.outsideTemplate(this.model.toJSON());
    // this.$el.html(template);
  }
});

// var person = new Person();
// var personView = new PersonView({
//   model: person
// })


// People Collection
var PeopleCollection = Backbone.Collection.extend({
  model: Person
});

var peopleCollection = new PeopleCollection([
  {
    name: 'Mohit Jain',
    age: 26
  },
  {
    name: 'Taroon Tyagi',
    age: 25,
    occupation: 'web designer'
  },
  {
    name: 'Rahul Narang',
    age: 26,
    occupation: 'Java Developer'
  }
]);

var PeopleView = Backbone.View.extend({
  el: 'body',
  tagName: 'li',
  outsideTemplate: Handlebars.compile($("#personTemplate").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.outsideTemplate(this.model.toJSON()));
  }
});

var peopleView = new PeopleView({
  collection: PeopleCollection,
  model: new Person()
});











