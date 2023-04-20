import styled from 'styled-components';

export const AppLayoutWrapper = styled.main`
	min-height: 100vh;
	scroll-snap-type: y mandatory;
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	gap: 24px;
	padding: 24px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	}
`;
