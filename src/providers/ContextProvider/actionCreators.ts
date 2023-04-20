export const SET_GAME = 'SET_GAME';
export const CLEAR_GAME = 'CLEAR_GAME';

export const setGameActionCreator = (game: GameType) => ({
	type: SET_GAME,
	payload: game,
});

export const clearGameActionCreator = () => ({
	type: CLEAR_GAME,
});
