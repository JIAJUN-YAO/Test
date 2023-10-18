import React from 'react';

const Settings = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  const mainContentStyle = {
    marginTop: '20px',
  };

  const buttonStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2980b9',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>My Settings</h1>
      </header>

      <main style={mainContentStyle}>
        <div>
          <h1 id="meHeading">Settings</h1>

          <button
            type="button"
            style={buttonStyle}
            onMouseOver={() => {
              this.setState({ buttonStyle: buttonHoverStyle });
            }}
            onMouseOut={() => {
              this.setState({ buttonStyle: {} });
            }}
          >
            See all profiles
          </button>

          <button
            type="button"
            style={buttonStyle}
            onMouseOver={() => {
              this.setState({ buttonStyle: buttonHoverStyle });
            }}
            onMouseOut={() => {
              this.setState({ buttonStyle: {} });
            }}
          >
            Privacy and Accessibility
          </button>

          <button
            type="button"
            style={buttonStyle}
            onMouseOver={() => {
              this.setState({ buttonStyle: buttonHoverStyle });
            }}
            onMouseOut={() => {
              this.setState({ buttonStyle: {} });
            }}
          >
            Help and Support
          </button>

          <button
            type="button"
            style={buttonStyle}
            onMouseOver={() => {
              this.setState({ buttonStyle: buttonHoverStyle });
            }}
            onMouseOut={() => {
              this.setState({ buttonStyle: {} });
            }}
          >
            Feedback
          </button>

          <button
            type="button"
            style={buttonStyle}
            onMouseOver={() => {
              this.setState({ buttonStyle: buttonHoverStyle });
            }}
            onMouseOut={() => {
              this.setState({ buttonStyle: {} });
            }}
          >
            Log out
          </button>

        </div>
      </main>
    </div>
  );
};

export default Settings;
