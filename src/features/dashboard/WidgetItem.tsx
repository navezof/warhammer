/** @jsxImportSource @emotion/react */
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from 'react';
import {
  draggable,
  dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import Button from '../../components/CustomButton';
import { css, type SerializedStyles } from '@emotion/react';
import { useRPGToolboxContext } from '../../RPGToolboxContext';

type WidgetItemProps = PropsWithChildren & {
  src: string;
  id: string;
  type: string;
  className?: string;
  removeWidget: (id: string) => void;
};

type State = 'idle' | 'dragging' | 'over';

const itemStateStyles: { [Key in State]: undefined | SerializedStyles } = {
  idle: css({
    ':hover': {
      boxShadow: 'elevation.shadow.overlay',
    },
  }),
  dragging: css({
    filter: 'opacity(0.8)',
  }),
  over: css({
    transform: 'translateY(10px)',
    filter: 'brightness(1.15)',
    boxShadow: '10px 5px 5px 5px grey',
  }),
};

// High Order Component: a component that wraps another children component
// Allows to add additional functionality to a component without modifying its structure
export const WidgetItem = ({
  src,
  children,
  id,
  type,
  className = '',
  removeWidget,
}: WidgetItemProps) => {
  const ref = useRef(null);
  const [state, setState] = React.useState<State>('idle');

  const { instanceId } = useRPGToolboxContext();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return combine(
      draggable({
        element: el,
        getInitialData: () => ({ type: 'grid-item', src, instanceId }),
        onDragStart: () => setState('dragging'),
        onDrop: () => setState('idle'),
      }),
      dropTargetForElements({
        element: el,
        getData: () => ({ src }),
        getIsSticky: () => true,
        canDrop: ({ source }) =>
          source.data.instanceId === instanceId &&
          source.data.type === 'grid-item' &&
          source.data.src !== src,
        onDragEnter: () => setState('over'),
        onDragLeave: () => setState('idle'),
        onDrop: () => setState('idle'),
      })
    );
  }, [instanceId, src]);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      css={itemStateStyles[state]}
    >
      <header className='text-md font-bold text-white mb-2'>{type}</header>
      <div className='pt-2 flex-1 flex flex-col bg-gray-50 h-[90%] p-2 space-y-2'>
        {children}
      </div>
      <div className='top-2 absolute right-2'>
        <Button onClick={() => removeWidget(id)} className='!p-2' size='sm'>
          X
        </Button>
      </div>
    </div>
  );
};
