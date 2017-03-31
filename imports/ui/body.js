import { Template } from 'meteor/templating'
import { Pressure } from '../api/pressure.js'
import './body.html'

Template.body.helpers({
  pressureCount: function () {  
  	//console.log(Tasks.find().fetch());
    return Pressure.find({}).count();

  },
});

//Listener for form .new-pressure
Template.PressureInput.events({
  'submit .new-pressure'(event) {
    // Prevent default browser form submit
    event.preventDefault();
     // Get value from form element
    const target = event.target;
    const systolic = target.systolic.value;
    const diastolic = target.diastolic.value;
    const readingTime = target.readingTime.value;
 
    // Insert using meteor method from pressure.js
    Meteor.call('pressure.insert', {
      systolic: systolic,
      diastolic: diastolic,
      readingTime: readingTime
    });

    console.log(readingTime)
    // Clear form
    //target.Systolic.value = '120';
  },
});

