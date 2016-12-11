import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import ActionHome from 'material-ui/svg-icons/action/home';

class Header extends Component {
  render() {
    const styles = {
      header: {
        position: 'fixed',
        zIndex: '100',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: '#00bcd4',
        borderBottom: '1px solid #0079aa',
        height: '47px',
        paddingLeft: '16px',
        paddingRight: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      nav: {
        color: 'white',
        opacity: '.8',
        fontWeight: '600',
        fontSize: '1.5em',
        textDecoration: 'none',
        ':hover': {
          cursor: 'pointer',
          textDecoration: 'underline'
        }
      }
    }
    return (
      <header style={styles.header}>
        <div>
          <Link to='/' style={styles.nav} key='1'><ActionHome color='#fff' /></Link>
        </div>
        <div>
          <Link to='/login' style={styles.nav} key='2'>登录</Link>
        </div>
      </header>
    );
  }
}

export default Radium(Header);
