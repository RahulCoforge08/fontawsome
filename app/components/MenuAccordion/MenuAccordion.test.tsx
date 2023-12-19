import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

    // Expand the first accordion panel
    await userEvent.click(accordionItems[0]);

    const submenuItem1 = await screen.findByText('SubMenu 1-1');
    const submenuItem2 = await screen.findByText('SubMenu 1-2');
    expect(submenuItem1).toBeInTheDocument();
    expect(submenuItem2).toBeInTheDocument();

    // Collapse the first accordion panel
    await userEvent.click(accordionItems[0]);

    // Check that submenu items are not visible after collapsing
    expect(submenuItem1).not.toBeInTheDocument();
    expect(submenuItem2).not.toBeInTheDocument();

    // Expand the second accordion panel
    await userEvent.click(accordionItems[1]);

    const submenuItem3 = await screen.findByText('SubMenu 2-1');
    const submenuItem4 = await screen.findByText('SubMenu 2-2');
    expect(submenuItem3).toBeInTheDocument();
    expect(submenuItem4).toBeInTheDocument();

    // Collapse the second accordion panel
    await userEvent.click(accordionItems[1]);

    // Check that submenu items are not visible after collapsing
    expect(submenuItem3).not.toBeInTheDocument();
    expect(submenuItem4).not.toBeInTheDocument();

    // Print the DOM for debugging
    console.log(screen.debug());
  });
});
