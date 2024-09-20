import { defineStore } from 'pinia';

export const useThemesStore = defineStore('themeStore', {
  state: () => ({
    _theme: '',
  }),
  getters: {
    choosenTheme: (state) => state._theme,
  },
  actions: {
    setTheme(theme) {
      this._theme = theme;
      localStorage.setItem('theme', this._theme);
    },
    getTheme() {
      const theme = localStorage.getItem('theme');

      if (theme) {
        this._theme = theme;
        return this._theme;
      } else {
        return '';
      }
    }
  },
});