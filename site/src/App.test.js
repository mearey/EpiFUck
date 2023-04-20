import { render, screen } from '@testing-library/react';
import DownloadButton from './DownloadButtonDiseases';
import Charts from './Charts';

describe('Download page', () => {

  it('renders select option for download', () => {
    render(<DownloadButton />);

    expect(screen.getByRole('option', {
      name: /covid19/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /Meningitis/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /Cholera/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /Measles/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /monkeypox/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /diphtheria/i
    })).toBeInTheDocument();
  })

  it('renders download button', () => {
    render(<DownloadButton />);
    expect(screen.getByRole('button', {
      name: /Download/i
    })).toBeInTheDocument();
  })
});

describe('View charts page', () => {

  it('renders select option in charts page', () => {
    render(<Charts />);

    expect(screen.getByRole('option', {
      name: /covid19/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /Meningitis/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /Cholera/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /Measles/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /monkeypox/i
    })).toBeInTheDocument();

    expect(screen.getByRole('option', {
      name: /diphtheria/i
    })).toBeInTheDocument();
  })
});

