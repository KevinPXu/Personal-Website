import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { projectList } from './data';

describe('App', () => {
  it('renders the landing, about, and contact sections', () => {
    render(<App />);
    expect(screen.getByText('WELCOME')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /about me/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact me/i })
    ).toBeInTheDocument();
  });

  it('renders a portfolio card for every project in data.js', () => {
    render(<App />);
    for (const project of projectList) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });
});
