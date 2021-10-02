import React from 'react';
import { render, screen } from '@testing-library/react';
import {Row, Alert, Column, ClearRow, ButtonRow} from '../../components/common';

describe('Row', () => {
    test('renders correctly', () => {
        const comp = render(<Row>Test</Row>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
    })
})

describe('ButtonRow', () => {
    test('renders correctly', () => {
        const comp = render(<ButtonRow>Test</ButtonRow>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
    })
})

describe('Alert', () => {
    test('renders correctly', () => {
        const comp = render(<Alert>Test</Alert>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
    })
})


describe('Column', () => {
    test('renders correctly', () => {
        const comp = render(<Column width="20px">Test</Column>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
        expect(comp.baseElement).toHaveStyle("width: '20px'");
    })
})


describe('ClearRow', () => {
    test('renders correctly', () => {
        const comp = render(<ClearRow>Test</ClearRow>);
        expect(comp).toBeTruthy();
        expect(comp.findByText('test')).toBeTruthy();
    })
})
