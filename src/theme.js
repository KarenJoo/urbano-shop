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
  productContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url("/assets/images/bg.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  },
  cartContainer: {
    background: '#efefefbc',
    width: '80%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 2px #888888',
    justifyContent: 'center',
    margin: '50px auto',
  },
  textInput: {
    extend: () => `
      font-size: 12px;
      border: 1px solid #efefef;
      width: 100%;
      background-color: #efefef98;
      border-radius: 5px;
      max-width: 50%;
      min-width: 250px;
      margin: 0px auto;
      margin-left: 50px;
      display: flex;
      padding: 12px 12px;
      color: #000;
      &::placeholder {
        color: #efefef; 
      }
    `,
  },
};
