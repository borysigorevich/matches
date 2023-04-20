import React from 'react';
import { ScoreWrapper } from '@/components/Score/styled';
import { ScoreProps } from '@/components/Score/types';

export const Score: React.FC<ScoreProps> = ({ home, away, open }) => {
	return (
		<ScoreWrapper>
			{open && (
				<>
					<p>{home || 0}</p>
					<p>-</p>
					<p>{away || 0}</p>
				</>
			)}
		</ScoreWrapper>
	);
};
