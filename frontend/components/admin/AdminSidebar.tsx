import * as React from 'react';

/**
 * Placeholder AdminSidebar component.
 * TODO: Replace with your Figma-implemented version.
 */
type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;
export const AdminSidebar = ({ className, children, ...props }: Props) => {
  return (
    <aside className={className} {...props}>
      {children ?? <div style={{ padding: 16 }}>Admin Sidebar (placeholder)</div>}
    </aside>
  );
};

export default AdminSidebar;
