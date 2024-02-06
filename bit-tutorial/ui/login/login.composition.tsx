import { Login, LoginProps } from './login';

export const BasicLogin = ({ ...rest}: LoginProps) => {
  return (
    <Login {...rest} />
  );
}
