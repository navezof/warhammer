import React, { PropsWithChildren } from 'react';
import Button from '../../components/CustomButton';

type WidgetItemProps = PropsWithChildren & {
  id: string;
  type: string;
  removeWidget: (id: string) => void;
};

// High Order Component: a component that wraps another children component
// Allows to add additional functionality to a component without modifying its structure
export const WidgetItem = ({
  children,
  id,
  type,
  removeWidget,
}: WidgetItemProps) => {
  return (
    <div className='relative p-4 bg-gray-800 rounded-lg'>
      <header className='text-lg font-bold text-white mb-2'>{type}</header>
      <div className='pt-2'>{children}</div>
      <div className='absolute top-2 right-2'>
        <Button onClick={() => removeWidget(id)} className='!p-2'>
          X
        </Button>
      </div>
    </div>
  );
};
