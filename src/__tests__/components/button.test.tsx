import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../components/button';

describe('Button', () => {
    test('renders correctly', () => {
        const comp = render(<Button>Test</Button>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
    })
})
