import styled from 'styled-components';
import { CountryProps, GameStatusProps } from '@/components/Heading/types';

export const HeadingWrapper = styled.div``;

export const Country = styled.h2<CountryProps>`
	font-size: 24px;
	color: ${({ open }) => (open ? '#fff' : 'hsl(0,0%,50%)')};
	font-weight: 400;
`;

export const League = styled.h1`
	font-size: 32px;
	color: #fff;
	font-weight: 400;
`;

export const GameStatus = styled.h2<GameStatusProps>`
	color: ${({ color, theme }) => theme[color] || '#fff'};
	font-weight: 400;
`;

export const Popup = styled.div``;
