import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import '../App.css'

export default function Theme() {
  const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, []);

  const { t } = useTranslation();

  return (
    <div id='main' className={theme}>
      <div id='box'>
        <header>
          <select value={language} onChange={handleLanChange}>
            <option value='en'>English</option>
            <option value='hi'>Hindi</option>
          </select>
          <select onChange={handleThemeChange} value={theme} name='theme'>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </header>
        <div id='nav'>
          <div id='d1'>
             <p id='p1'>{t('hello')},&nbsp;&nbsp;{t('welcome')}!</p>
          </div>
          <div id='d2'>
             <p id='p2'>{t('New')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
