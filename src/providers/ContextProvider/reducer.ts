import { ReducerType, StateType } from '@/providers/ContextProvider/types';
import {
	CLEAR_GAME,
	SET_GAME,
} from '@/providers/ContextProvider/actionCreators';

export const reducer: ReducerType = (state: StateType, action) => {
	switch (action.type) {
		case SET_GAME:
			return {
				game: action.payload,
				isModalOpen: true,
			};
		case CLEAR_GAME:
			return {
				game: null,
				isModalOpen: false,
			};
		default:
			return state;
	}
};
