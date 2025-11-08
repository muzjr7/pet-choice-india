import * as React from 'react';

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export const AdminTopBar = ({ className, children, ...props }: Props) => {
  return (
    <header className={className} {...props}>
      {children ?? <div style={{ padding: 8 }}>Admin Top Bar (placeholder)</div>}
    </header>
  );
};

export default AdminTopBar;
