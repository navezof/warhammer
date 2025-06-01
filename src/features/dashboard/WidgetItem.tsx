import React, { PropsWithChildren } from 'react';
import Button from '../../components/CustomButton';

type WidgetItemProps = PropsWithChildren & {
  id: string;
  removeWidget: (id: string) => void;
};

// High Order Component: a component that wraps another children component
// Allows to add additional functionality to a component without modifying its structure
export const WidgetItem = ({ children, id, removeWidget }: WidgetItemProps) => {
  return (
    <div>
      {children}
      <Button onClick={() => removeWidget(id)}>Remove</Button>
    </div>
  );
};
