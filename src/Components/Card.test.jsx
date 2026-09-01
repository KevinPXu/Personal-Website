import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const props = {
  title: 'Test Project',
  description: 'A short description of the project.',
  url: 'https://example.com/app',
  imageURL: 'https://example.com/thumb.png',
};

describe('Card', () => {
  it('renders the title and description from props', () => {
    render(<Card {...props} />);
    expect(
      screen.getByRole('heading', { name: 'Test Project' })
    ).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('links "Continue to App" to the project url', () => {
    render(<Card {...props} />);
    const link = screen.getByRole('link', { name: /continue to app/i });
    expect(link).toHaveAttribute('href', props.url);
  });
});
