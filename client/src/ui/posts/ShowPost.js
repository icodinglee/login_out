import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../redux/actions/postActions';
import { Settings } from '../../settings';
import isEmpty from 'lodash/fp/isEmpty';

class ShowPost extends Component {
  componentWillMount() {
    this.props.getPost(this.props.params.post_id);
  }

  render() {
    const styles = {
      cover: {
        backgroundImage: isEmpty(this.props.post) ? 'none' : `url(${Settings.host}/uploads/posts/${this.props.post.cover})`,
        height: '300px',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      },
      container: {
        maxWidth: '960px',
        margin: '26px auto 0'
      },
      name: {
        fontSize: '28px',
        lineHeight: '28px',
        color: '#2e4453',
        paddingBottom: '28px',
        textIndent:"10px"
      },
      content: {
        color: '#666',
        textIndent:"10px"
      }
    }

    return (
      <div>
        <div style={styles.cover}></div>
        <div style={styles.container}>
          <div style={styles.name}>{this.props.post.name}</div>
          <div style={styles.content}>{this.props.post.content}</div>
        </div>
      </div>
    );
  }
}

ShowPost.propTypes = {
  post: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, { getPost })(ShowPost);
