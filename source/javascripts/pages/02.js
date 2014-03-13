// Model
var Person = Backbone.Model.extend({
  defaults: {
    name: 'Khoi',
    age: 12,
    occupation: 'IT Employee'
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
    return this.get('name') + ' is working';
  }
});

// Collection

var PeopleCollection = Backbone.Collection.extend({
  model: Person
});

// View
var PersonView = Backbone.View.extend({
  el: 'body',
  tagName: 'li',
  // myTemplate: _.template("<strong><%= name %></strong>(<%= age %>) - <%= occupation %>"),
  template: Handlebars.compile($('#personTemplate').html()),
  initialize: function() {
    console.log('Initializing Person View')
    this.render();
  },
  render: function() {
    // var _name = this.model.get('name'),
    //   _age = this.model.get('age'),
    //   _occupation = this.model.get('occupation');

    // this.$el.html(_name + '(' + _age + ')' + _occupation);

    // Or using template with model
    // var template = this.myTemplate(this.model.toJSON());
    // this.$el.html(template);

    // Or using this way, render html template from layout
    // var template = this.myTemplate2(this.model.toJSON());
    //console.log(template);
    //this.$el.html(this.template(this.model.toJSON()));
    var template = this.template(this.model.toJSON())

    this.$el.html(template);

  }
});


var peopleCollection = new PeopleCollection([
  {
    name: 'Abc',
    age: 29
  },
  {
    name: 'Def',
    age: 12
  }
]);

var PeopleView = Backbone.View.extend();

var people = new PeopleView({
  collection: peopleCollection
});

console.log(people);