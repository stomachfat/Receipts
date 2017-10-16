import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../util/Auth';

const mapDispatchToProps = (dispatch) => ({
  tryAuth: (username, password) => {
    login(username, password);
  },
});

export default connect(null, mapDispatchToProps)(Login);
