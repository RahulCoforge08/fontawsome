import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuAccordion, { AccordionProps } from './MenuAccordion';

const mockAccordionData: AccordionProps['data'] = [
  {
    id: '1',
    icon: 'Warning2',
    link: '',
    subMenu: [
      { link: '/submenu1', subMenuId: '1', title: 'SubMenu 1' },
      { link: '/submenu2', subMenuId: '2', title: 'SubMenu 2' },
    ],
    title: 'Accordion 1',
  },
  {
    id: '2',
    icon: 'MoneyBill',
    link: '',
    subMenu: [
      { link: '/submenu3', subMenuId: '3', title: 'SubMenu 3' },
      { link: '/submenu4', subMenuId: '4', title: 'SubMenu 4' },
    ],
    title: 'Accordion 2',
  },
];

describe('MenuAccordion', () => {
  test('Renders accordions with icons when showIcons is true', () => {
    render(<MenuAccordion data={mockAccordionData} showIcons />);

    const icon1 = screen.getByAltText('Warning2'); 
    const icon2 = screen.getByAltText('MoneyBill');

    expect(icon1).toBeInTheDocument();
    expect(icon2).toBeInTheDocument();
  });

  test('Does not render icons when showIcons is false', () => {
    render(<MenuAccordion data={mockAccordionData} showIcons={false} />);
  
    const icons = screen.queryByAltText('Warning2'); // Adjust based on how your DynamicIcon component works
  
    expect(icons).not.toBeInTheDocument();
  });
  

//   test('Expands the accordion with defaultId', () => {
//     render(<MenuAccordion data={mockAccordionData} defaultId="2" />);

//     const accordion2 = screen.getByText('Accordion 2');
//     const submenu3 = screen.getByText('SubMenu 3');

//     expect(accordion2).toHaveAttribute('aria-expanded', 'true');
//     expect(submenu3).toBeInTheDocument();
//   });

//   test('Expands and collapses accordions correctly', () => {
//     render(<MenuAccordion data={mockAccordionData} />);

//     const accordion1 = screen.getByText('Accordion 1');
//     const submenu1 = screen.getByText('SubMenu 1');

//     // Initially, accordion 1 is expanded
//     expect(submenu1).toBeInTheDocument();

//     // Collapse accordion 1
//     fireEvent.click(accordion1);
//     expect(submenu1).not.toBeInTheDocument();

//     // Expand accordion 1 again
//     fireEvent.click(accordion1);
//     expect(submenu1).toBeInTheDocument();
//   });
});
