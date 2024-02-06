import type { ReactNode, HTMLAttributes } from 'react';

export type TitleProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>

export function Title({ children, ...rest }: TitleProps) {
  return (
    <h1 {...rest}>
      {children}
    </h1>
  );
}
