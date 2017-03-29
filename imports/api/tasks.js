import { Mongo } from 'meteor/mongo'
 
export const Tasks = new Mongo.Collection('tasks')

if (Meteor.isServer) {
	Meteor.publish('tasks', function() {
		return Tasks.find()
	})
}

if (Meteor.isClient) {
	Meteor.subscribe('tasks')
}