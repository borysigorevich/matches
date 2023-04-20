import { Dispatch, SetStateAction } from 'react';

export type FilterProps = {
	setFilters: Dispatch<SetStateAction<string[]>>;
	filters: StatusType[];
};
