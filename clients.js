sampleApp.factory('clientsService', function ($resource) {
	var apiBaseUrl = API_URL_HOST + '/Clients/:clientId',
			ClientApi = $resource(apiBaseUrl, null,
				{
					getClient:      { method: 'GET' },
					getAllContacts: { method: 'GET',    url: apiBaseUrl + '/contacts', isArray: true },
					createContact:  { method: 'POST',   url: apiBaseUrl + '/contacts'},
					updateContact:  { method: 'PUT',    url: apiBaseUrl + '/contacts/:contactId' },
					deleteContact:  { method: 'DELETE', url: apiBaseUrl + '/contacts/:contactId', isArray: true },

					getAllIfs:      { method: 'GET',    url: apiBaseUrl + '/ifs', isArray: true }
				}
			);

	return {
		getClient: function (clientId) {
			return ClientApi.getClient({clientId: clientId}).$promise;
		},

		// contacts api
		getAllContacts: function (clientId) {
			return ClientApi.getAllContacts({clientId: clientId}).$promise;
		},
		createContact: function (clientId, newContact) {
			return ClientApi.createContact({clientId: clientId}, newContact).$promise;
		},
		updateContact: function (clientId, contactId, newContact) {
			return ClientApi.updateContact({clientId: clientId, contactId: contactId}, newContact).$promise;
		},
		deleteContact: function (clientId, contactId) {
		return ClientApi.deleteContact({clientId: clientId, contactId: contactId}).$promise;
		},

		// ifs api
		getAllIfs: function (clientId) {
			return ClientApi.getAllIfs({clientId: clientId}).$promise;
		}
	};
});