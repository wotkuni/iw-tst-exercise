import { useState } from 'react';

import './SignUp.css';

const SignUp = () => {
  const [, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const valid = password === passwordConfirm;
  const active = password.length || passwordConfirm.length;

  return (
    <div className="signup">
      <form>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className={active && !valid ? 'invalid' : ''}
        />

        <label for="password">Confirm Password</label>
        <input
          type="password"
          name="password-confirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className={active && !valid ? 'invalid' : ''}
        />

        {active
          ? (valid
            ? <p className="message valid">Passwords match!</p>
            : <p className="message invalid">Passwords do not match</p>
          )
          : ''
        }

        <button type="submit" disabled={!active || !valid}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;