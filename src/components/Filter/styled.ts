import styled from 'styled-components';

type OpenProps = {
	open: boolean;
};

type ActiveProps = {
	active: boolean;
};

export const FilterWrapper = styled.div`
`;

export const FilterButton = styled.div<OpenProps>`
	writing-mode: vertical-rl;
	text-orientation: upright;
	position: fixed;
	left: 0;
	top: 100px;
	height: auto;
	width: 30px;
	background: #fff;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	text-align: center;
	display: flex;
	justify-content: center;
	line-height: 2;
	padding-top: 8px;
	padding-bottom: 8px;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.3s;
	opacity: ${({ open }) => (open ? 0 : 1)};
	z-index: ${({ open }) => (open ? -1 : 1)};
`;

export const FiltersContent = styled.div<OpenProps>`
	min-width: 150px;
	min-height: 100px;
	background: #fff;
	position: fixed;
	text-align: center;

	top: 100px;
	left: 0;
	transition: transform 0.3s;
	text-transform: uppercase;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	
	.close {
		position: absolute;
		right: 8px;
		top: 8px;
		color: #000;
		cursor: pointer;
	}
`;

export const Header = styled.div`
	font-size: 32px;
	color: #000;
	padding: 16px;
	font-weight: 600;
`;

export const Label = styled.div<ActiveProps>`
	padding: 12px 0;
	font-weight: 500;
	border-top: 1px solid hsl(0, 0%, 0%, 0.2);
	transition: background-color 0.3s;

	background-color: ${({ active }) =>
		active ? 'hsl(0, 0%, 0%, 0.1)' : '#fff'};

	&:hover {
		background: hsl(0, 0%, 0%, 0.1);
	}
`;
