import { useRef, useState } from 'react';

import { ArrowDown } from '@/assets/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import styles from './Select.module.scss';

export const Select = ({ options, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleButtonClick = () => {
    if (!isDropdownOpen) {
      handleDropdownOpen();
      return;
    }
    handleDropdownClose();
  };

  const createOptionSelectHandler = (option) => {
    onChange(option);
    handleDropdownClose();
  };

  useOutsideClick({
    ref: dropdownRef,
    handler: handleDropdownClose,
    condition: isDropdownOpen,
  });

  return (
    <div className={styles.select} ref={dropdownRef}>
      <button type="button" className={styles.selectButton} onClick={handleButtonClick}>
        <span>{value.label}</span>
        <ArrowDown />
      </button>

      {isDropdownOpen && (
        <ul className={styles.selectOptions}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={styles.selectOption}
                onClick={() => createOptionSelectHandler(option)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
