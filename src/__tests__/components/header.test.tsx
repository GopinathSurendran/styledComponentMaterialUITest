import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/header';

describe('Header', () => {
    test('renders correctly', () => {
        const comp = render(<Header>Test</Header>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
    })
})
