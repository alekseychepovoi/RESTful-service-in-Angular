/**
 * Created by a on 2014-05-14.
 */

sampleApp.factory('documentsService', function ($http, $upload) {
	var apiBaseUri = API_URL_HOST + '/',
			documents = [];


	return {
		getDocumentListing: function (clientId, docName) {
			return $http.get(apiBaseUri + "Clients/" + clientId + "/" + docName);
		},
		getDocument: function (clientId, docName, docId) {
			return $http.get(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId);
		},
		createDocument: function (clientId, docName, newDoc) {
			return $http.post(apiBaseUri + "Clients/" + clientId + "/" + docName, newDoc);
		},
		updateDocument: function (clientId, docName, docId, updatedDoc) {
			return $http.put(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId, updatedDoc);
		},
		deleteDocument: function (clientId, docName, docId) {
			return $http.delete(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId);
		},

		getCommentsListing: function (clientId, docName, docId) {
			return $http.get(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId + "/comments/");
		},
		getComment: function (clientId, docName, docId, commentId) {
			return $http.get(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId + "/comments/" + commentId);
		},
		createComment: function (clientId, docName, docId, newComment) {
			return $http.post(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId + "/comments/", newComment);
		},
		updateComment: function (clientId, docName, docId, commentId, updateComment) {
			return $http.put(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId + "/comments/" + commentId, updateComment);
		},
		deleteComment: function (lientId, docName, docId, commentId) {
			return $http.delete(apiBaseUri + "Clients/" + clientId + "/" + docName + "/" + docId + "/comments/" + commentId);
		},

		uploadFile: function (file) {
			return $upload.upload({
				url: apiBaseUri + 'files',
				method: 'POST',
				file: file
			});
		},

		documents: documents
	}
});