import { Template } from 'meteor/templating'

import './jimLogin.html'

Template.jimLogin.helpers({
	//Fills in {{currentUser}} in the HTML
	currentUser : function() {
		//Get the current user using Meteor.user() and then return that value
		return Meteor.user()
	}
})

Template.jimLogin.events({
	//When button newUser is clicked, perform this code
	'click #newUser' : function(event) {
		//Prevent any default html or js associated with a button click
		event.preventDefault()

		//Test code - see this printed in the JavaScript Console (in your web browser)
		console.log("Button is clicked")
		console.log($('#email').val())
		console.log($('#password').val())
		console.log($('#passConfirm').val())

		//Your code goes here, figure out how to use the Meteor create user function to add a new user to the database
	}
})