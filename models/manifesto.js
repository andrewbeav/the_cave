var mongoose = require('mongoose');

var manifestoSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	creationDate: {
		type: Date,
		required: true,
		default: Date.now()
	}
});

var Manifesto = mongoose.model('manifesto', manifestoSchema);

Manifesto.addManifesto = function(manifesto, callback) {
	Manifesto.create(manifesto, callback);
}

Manifesto.getManifestos = function(callback) {
	Manifesto.find(callback);
}

Manifesto.deleteManifesto = function(id, callback) {
	Manifesto.remove( { _id: id }, callback );
}

module.exports = Manifesto;
