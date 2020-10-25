const mongoose = require('mongoose');

// User Schema
const profileSchema = mongoose.Schema({
	id: { type: String },
	cluster_id: { type: String },
	name: { type: String },
	created_at: { type: String },
	updated_at: { type: String },
	data_stream: { type: String },
});

profileSchema.set('timestamps', true);

module.exports = mongoose.model('User', profileSchema)
