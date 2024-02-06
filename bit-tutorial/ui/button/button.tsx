import type { ReactNode, HTMLAttributes } from 'react';

export type ButtonProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button type='submit'
            {...rest}
    >
      {children}
    </button>
  );
}
