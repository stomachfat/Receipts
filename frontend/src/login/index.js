import { connect } from 'react-redux';
import Login from './Login';
import noop from 'lodash/noop';
import { login } from '../util/Auth';

const mapStateToProps = noop;

const mapDispatchToProps = (dispatch) => ({
  tryAuth: (username, password) => {
    login(username, password);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
