'use client';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppLayoutProps } from '@/layouts/AppLayout/types';
import { AppLayoutWrapper } from '@/layouts/AppLayout/styled';

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background-color: rgb(61, 61, 61);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
	green: 'rgb(111, 201, 106)',
	yellow: 'rgb(228, 212, 77)',
	red: 'rgb(218, 119, 130)',
	'light-dark': 'rgb(128, 128, 128)',
	background: 'rgb(61, 61, 61)',
};

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AppLayoutWrapper>{children}</AppLayoutWrapper>
		</ThemeProvider>
	);
};
