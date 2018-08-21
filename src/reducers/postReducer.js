import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initalState = {
	items: [],
	item: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
