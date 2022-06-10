/* textfield */
import '@rmwc/select/select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/list/dist/mdc.list.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/select/dist/mdc.select.css';

import { FormattedOption, Select, SelectProps } from '@rmwc/select';
import React from 'react';
// import classNames from 'classnames';
// import styles from './dropdown.module.scss';

export type DropdownProps = SelectProps & {
  big?: boolean;
  className?: string;
  options:
    | FormattedOption[]
    | string[]
    | {
        [value: string]: string;
      };
};

const Dropdown = ({ big, className, ...rest }: DropdownProps) => (
  <Select
    enhanced
    // className={classNames([className, styles.dropdown, styles.outlined, { [styles.big]: big }])}
    {...rest}
  />
);

export default Dropdown;
