import { createContext } from 'react';

export const ThemeContext = createContext();

export const theme = {
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fcf5ed',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a75a00',
  },
  input: {
    height: 40,
    backgroundColor: '#ffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    border: 'none',
    fontSize: 15
  },
  customInputContainer: {
    borderBottomWidth: 0,
    border: 'none'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  checkbox: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  space: {
    height: 20,
  },
};