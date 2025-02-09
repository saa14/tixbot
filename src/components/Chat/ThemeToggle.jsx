import React from 'react';
import { useTheme } from '../../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-gray-300">
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} size="lg" />
    </button>
  );
};

export default ThemeToggle; 