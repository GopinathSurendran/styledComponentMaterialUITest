import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/card';

describe('Card', () => {
    test('renders correctly', () => {
        const comp = render(<Card background="rgb(0, 0, 0)">Test</Card>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
        expect(comp.baseElement).toHaveStyle("background: 'rgb(0, 0, 0'");
    })
})
