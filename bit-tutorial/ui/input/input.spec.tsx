import React from 'react';
import { render } from '@testing-library/react';
import { BasicInput } from './input.composition';

describe('Input', () => {
  it('renders with the correct label', () => {
    const { getByLabelText } = render(<BasicInput />);
    const rendered = getByLabelText('email');
    expect(rendered).toBeTruthy();
  });
});
