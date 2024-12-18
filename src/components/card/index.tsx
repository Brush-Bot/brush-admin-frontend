import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<unknown> {
  __marker?: never;
}

const Card = (props: Props) => {
  const { children, className } = props;

  return (
    <div
      {...props}
      id="card"
      className={`
        h-full
        rounded-[8px]
        bg-white
        p-[16px]
        shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
