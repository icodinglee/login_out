import React, { Component } from 'react';
import Radium from 'radium';
import { Settings } from '../../settings';
import PostActionList from './PostActionList';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PostItem extends Component {
  getStyles() {
    return {
      root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#fff',
        border: '1px solid rgba(200, 215, 225, 0.5)',
        boxShadow: ' 0 1px 2px #e9eff3',
        marginBottom: '24px',
        position: 'relative'
      },
      content: {
        padding: '16px 24px 12px',
        lineHeight: '1.3em'
      },
      name: {
        color: '#2e4453',
        fontWeight: '600',
        fontSize: '1.2em',
        textDecoration: 'none'
      },
      cover: {
        borderBottom: 'solid 1px rgba(200, 215, 225, 0.5)',
        maxHeight: '300px',
        overflowY: 'hidden',
        },
      image: {
        display: 'block',
        width: '100%'
      }
    }
  }

  render() {
    console.log(this.props.user)
    const styles = this.getStyles();
    return (
      <div style={styles.root}>
        <div style={styles.cover}>
            <img src={`${Settings.host}/uploads/posts/${this.props.post.cover}`} style={styles.image}/>
        </div>
        <div style={styles.content}>
          <Link to={`/posts/${this.props.post._id}`}　style={styles.name}>
            {this.props.post.name}
          </Link>
        </div>
        { this.props.isAuthenticated && (this.props.user.admin === true) ? <PostActionList post={this.props.post} /> : '' }
      </div>
    );
  }
}

PostItem.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.currentUser
})

export default connect(mapStateToProps)(Radium(PostItem));
