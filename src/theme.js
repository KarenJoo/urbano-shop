export const theme = {
  global: {
    font: {
      family: 'Lexend, sans-serif',
      size: '18px',
      height: '20px',
    },
    colors: {
      brand: '#38609d',
      background: '#d6d7db',
      'accent-1': '#9ca9e0',
      focus: '#38609d',
      border: {
        light: '#888888',
      },
      dark: '#000',
      'custom-hover': '#38609d',
    },
    elevation: {
      light: {
        small: '0 2px 2px #888888',
      },
    }
  },
  textInput: {
    extend: () => `
      font-size: 12px;
      border: 2px solid #38609d;
      width: 100%;
      background-color: #efefef98;
      border-radius: 5px;
      max-width: 50%;
      min-width: 300px;
      margin: 10px auto;
      display: flex;
      padding: 12px 12px;
      color: #38609d;
      &::placeholder {
        color: #38609d; 
      }
    `,
  },
};
