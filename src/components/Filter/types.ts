import { Dispatch, SetStateAction } from 'react';

export type FilterProps = {
	setFilters: Dispatch<SetStateAction<StatusType[]>>;
	filters: StatusType[];
};
