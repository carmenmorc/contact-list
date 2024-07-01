const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {

			addContact: (data) => {
				setStore({ contacts: [...getStore().contacts, data] })
			},
		}
	};
};

export default getState;
