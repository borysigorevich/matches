import React from 'react';
import {
	Country,
	GameStatus,
	HeadingWrapper,
	League,
} from '@/components/Heading/styled';
import { HeadingProps } from '@/components/Heading/types';
import {
	StatusColorConfig,
	StatusTypeConfig,
} from '@/components/Heading/configs';

export const Heading: React.FC<HeadingProps> = ({
	country,
	status,
	competition,
	date,
	time,
	open,
}) => {
	const configuredStatus = StatusTypeConfig[status];
	const newDate = new Date(date as string).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
	});
	const normalizedDate = newDate.toUpperCase() + 'TH ' + time;

	return (
		<HeadingWrapper>
			<Country open={open}>{country}</Country>
			<League>{competition}</League>

			<GameStatus color={StatusColorConfig[status]}>
				{configuredStatus || normalizedDate}
			</GameStatus>
		</HeadingWrapper>
	);
};
