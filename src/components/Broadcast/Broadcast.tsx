import React from 'react';
import { BroadcastProps } from '@/components/Broadcast/types';
import { BroadcastWrapper, Time } from '@/components/Broadcast/styled';

export const Broadcast: React.FC<BroadcastProps> = ({
	homeTeam,
	awayTeam,
	liveStatus,
}) => {
	const editedStatus = (liveStatus as string)?.replace(/[+]/g, '');
	let degree = liveStatus === 'FT' ? 100 : (Number(editedStatus) / 90) * 100;

	const status = ['-', 'Canceled'].includes(liveStatus as string)
		? ''
		: liveStatus;
	return (
		<BroadcastWrapper>
			<p>{homeTeam}</p>
			<Time isFinished={liveStatus === 'FT'} degree={degree}>
				<p>{status}</p>
			</Time>
			<p>{awayTeam}</p>
		</BroadcastWrapper>
	);
};
