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
      border: 1px solid #000;
      width: 100%;
      background-color: #efefef95;
      border-radius: 5px;
      max-width: 50%;
      min-width: 40%;
      margin: 150px auto;
      margin-left: 50px;
      display: flex;
      padding: 12px 12px;
      color: #000;
      &::placeholder {
        color: #000; 
      }
    `,
  },
};
