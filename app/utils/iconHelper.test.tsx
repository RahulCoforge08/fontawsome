import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { getIconByName, DynamicIcon } from './iconHelper';

describe('Icon Helper Functions', () => {
  test('getIconByName returns the correct icon component', () => {
    const warning2Icon = getIconByName('Warning2');
    const moneyBillIcon = getIconByName('MoneyBill');

    expect(warning2Icon).not.toBeNull();
    expect(moneyBillIcon).not.toBeNull();
  });

  test('DynamicIcon renders the correct icon based on iconName', () => {
    const { container } = render(<DynamicIcon iconName="Warning2" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toBeInTheDocument();
  });

  test('DynamicIcon renders null for non-existent iconName', () => {
    const { container } = render(<DynamicIcon iconName="NonExistentIcon" />);
    const svgElement = container.querySelector('svg');

    expect(svgElement).toBeNull();
  });

});
