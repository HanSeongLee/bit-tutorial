import type { ReactNode, HTMLAttributes } from 'react';

export type WelcomeProps = {
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Welcome({ children, className, ...rest }: WelcomeProps) {
  return (
    <div {...rest} className={`welcome ${className}`}>
      {children}
    </div>
  );
}
