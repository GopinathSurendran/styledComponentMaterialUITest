import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders properly without error', () => {
    const comp = render(<App />);
    expect(comp).toBeTruthy();
    expect(comp.getByTestId("header")).toBeTruthy();
    expect(comp.getByTestId("stop-button")).toBeTruthy();
    expect(comp.getByTestId("clear-button")).toBeTruthy();
    expect(comp.getByTestId("column-1")).toBeTruthy();
    expect(comp.getByTestId("column-2")).toBeTruthy();
    expect(comp.getByTestId("column-3")).toBeTruthy();
    expect(comp.getByTestId("card")).toBeTruthy();
  });

  test("clear all records", () => {
    const comp = render(<App />);
    const card = comp.getByTestId("card");
    fireEvent.click(comp.getByTestId("stop-button"));
    fireEvent.click(comp.getByTestId("clear-button"));
    expect(card).not.toBeInTheDocument();
  })
});
