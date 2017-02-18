import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

import './body.html'

import './jim/jimLogin.js'

Template.body.onCreated(function (){
	Meteor.subscribe('users')
})

Template.body.helpers({
	users : function() {
		return Meteor.users.find({})
	},
})