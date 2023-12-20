import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react';
import MenuAccordion, { AccordionProps } from './MenuAccordion';
import userEvent from '@testing-library/user-event';

const mockAccordionData: AccordionProps['data'] = [
  {
    id: '1',
    icon: 'Warning2',
    link: '/link1',
    subMenu: [
      { id: '1-1', link: '/link1-1', title: 'SubMenu 1-1' },
      { id: '1-2', link: '/link1-2', title: 'SubMenu 1-2' },
    ],
    title: 'Accordion 1',
  },
  {
    id: '2',
    icon: 'MoneyBill',
    link: '/link2',
    subMenu: [
      { id: '2-1', link: '/link2-1', title: 'SubMenu 2-1' },
      { id: '2-2', link: '/link2-2', title: 'SubMenu 2-2' },
    ],
    title: 'Accordion 2',
  },
];

describe('MenuAccordion', () => {
  test('renders accordion items', () => {
    render(<MenuAccordion data={mockAccordionData} />);
    const accordionItems = screen.getAllByRole('button', { name: /Accordion \d/i });
    expect(accordionItems).toHaveLength(mockAccordionData.length);
  });

  test('expands the accordion with defaultId', () => {
    const defaultId = '1';
    render(<MenuAccordion data={mockAccordionData} defaultId={defaultId} />);

    const submenuItem1 = screen.getByText('SubMenu 1-1');
    const submenuItem2 = screen.getByText('SubMenu 1-2');

    expect(submenuItem1).toBeInTheDocument();
    expect(submenuItem2).toBeInTheDocument();
  });
  
  test('expands and collapses accordion panels on header click', async () => {
    render(<MenuAccordion data={mockAccordionData} />);
    const accordionItems = screen.getAllByRole('button', { name: /Accordion \d/i });
    console.log(screen.debug());
    // Click on the first accordion to expand it
    userEvent.click(accordionItems[0]);

    // Wait for the DOM to update
    await waitFor(() => {
      expect(accordionItems[0]).toHaveAttribute('aria-expanded', 'true');
      expect(accordionItems[1]).toHaveAttribute('aria-expanded', 'false');
    });

    // Click on the second accordion to expand it
    userEvent.click(accordionItems[1]);

    // Wait for the DOM to update
    await waitFor(() => {
      expect(accordionItems[0]).toHaveAttribute('aria-expanded', 'false');
      expect(accordionItems[1]).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test('should show and hide icons based on showIcons prop', () => {
    render(<MenuAccordion data={mockAccordionData} showIcons={true} />);
    let icons = screen.queryAllByTestId('dynamic-icon');
    expect(icons).toHaveLength(1);
  
    render(<MenuAccordion data={mockAccordionData} showIcons={false} />, {container: document.body});
    icons = screen.queryAllByTestId('dynamic-icon');
    expect(icons).toHaveLength(0);
  });
  
});
