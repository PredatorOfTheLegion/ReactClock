import React from 'react';
import { createRoot } from 'react-dom/client'; // Используем createRoot из react-dom/client
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Создаем корневой элемент
const container = document.getElementById('root');
const root = createRoot(container); // Создаем корневой рендерер

// Рендерим приложение
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);