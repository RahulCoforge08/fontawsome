import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DynamicIcon } from './../../utils/iconHelper';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classNames from 'classnames';
import defaultStyles from './MenuAccordion.module.scss';

const DEFAULT_ICON_SIZE = 24;

interface SubMenuItem {
  id: string;
  link: string;
  title: string;
}

interface AccordionItem {
  id: string;
  icon: string;
  link: string;
  subMenu: SubMenuItem[];
  title: string;
  iconSize?: number;
}

export interface AccordionProps {
  data: AccordionItem[];
  className?: string;
  showIcons?: boolean;
  defaultId?: string;
}

const MenuAccordion = ({ data, className, showIcons = false, defaultId }: AccordionProps) => {
  const [expandedPanelId, setExpandedPanelId] = useState<string | null>(null);

  useEffect(() => {
    if (!defaultId && data.length > 0) {
      setExpandedPanelId(data[0].id);
    }
  }, [data, defaultId]);

  const handleChange = (panel: string) => (isExpanded: boolean) => {
    if (expandedPanelId === panel) return;
    setExpandedPanelId(isExpanded ? panel : null);
  };

  const renderSubMenu = (subMenu: SubMenuItem) => (
    <li className={classNames(defaultStyles.menuItem)} key={subMenu.id}>
      <Link href={subMenu.link} target="_blank" rel="noopener noreferrer">
        {subMenu.title}
      </Link>
    </li>
  );

  const renderAccordionItem = (item: AccordionItem) => (
    <MuiAccordion
      key={item.id}
      expanded={expandedPanelId === item.id}
      onChange={(e, isExpanded) => handleChange(item.id)(isExpanded)}
      defaultExpanded={item.id === expandedPanelId}
      className={classNames(defaultStyles.customAccordion)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classNames(defaultStyles.summary)}>
        {showIcons && (
          <DynamicIcon
            className={classNames(defaultStyles.icon)}
            size={item.iconSize ?? DEFAULT_ICON_SIZE}
            iconName={item.icon}
          />
        )}
        <Typography className={classNames(defaultStyles.title)}>{item.title}</Typography>
      </AccordionSummary>

      <AccordionDetails className={classNames(defaultStyles.details)}>
        <ul className={classNames(defaultStyles.menuList)}>{item.subMenu?.map(renderSubMenu)}</ul>
      </AccordionDetails>
    </MuiAccordion>
  );

  return (
    <div className={classNames(defaultStyles.accordion, className)}>
      {data?.map(renderAccordionItem)}
    </div>
  );
};

export default MenuAccordion;
