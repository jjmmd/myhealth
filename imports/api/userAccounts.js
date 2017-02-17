import { Mongo } from 'meteor/mongo'
  
if (Meteor.isServer) {
	Meteor.publish('users', function() {
		return Meteor.users.find()
	})
}