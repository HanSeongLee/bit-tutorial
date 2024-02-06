import type { HTMLAttributes } from 'react';
import { useState } from 'react';
import { Title } from '@jkhanseong/bit-tutorial.ui.title';
import { Input } from '@jkhanseong/bit-tutorial.ui.input';
import { Button } from '@jkhanseong/bit-tutorial.ui.button';

export type LoginProps = {
  onSubmit: (data: { email: string; password: string }) => void;
} & HTMLAttributes<HTMLFormElement>

export function Login({ onSubmit, ...rest }: LoginProps) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

    return (
        <form {...rest}
              onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(data);
              }}
        >
            <Title>Welcome Back</Title>
            <Input
                value={data.email}
                onChange={(e) => {
                    setData({
                        ...data,
                        email: e.target.value
                    });
                }}
                label='Email'
            />
            <Input
                value={data.password}
                onChange={(e) => {
                    setData({
                        ...data,
                        password: e.target.value
                    });
                }}
                label='Password'
            />
            <Button>
                Submit
            </Button>
        </form>
    );
}
