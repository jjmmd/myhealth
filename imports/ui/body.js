import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
  	console.log(Tasks.find());
    return Tasks.find().count();
  },
});
