'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
  type HTMLMotionProps,
  type MotionValue,
} from 'motion/react';

import { getStrictContext } from '@/lib/get-strict-context';
import { useControlledState } from '@/hooks/use-controlled-state';

type TooltipContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
  followCursor?: boolean | 'x' | 'y';
  followCursorSpringOptions?: SpringOptions;
};

const [LocalTooltipProvider, useTooltip] =
  getStrictContext<TooltipContextType>('TooltipContext');

/* -------------------------------- Provider -------------------------------- */

type TooltipProviderProps = React.ComponentProps<
  typeof TooltipPrimitive.Provider
>;

function TooltipProvider(props: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      {...props}
    />
  );
}

/* -------------------------------- Root -------------------------------- */

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root> & {
  followCursor?: boolean | 'x' | 'y';
  followCursorSpringOptions?: SpringOptions;
};

function Tooltip({
  followCursor = false,
  followCursorSpringOptions = { stiffness: 200, damping: 17 },
  ...props
}: TooltipProps) {
  const [isOpen, setIsOpen] = useControlledState({
    value: props?.open,
    defaultValue: props?.defaultOpen,
    onChange: props?.onOpenChange,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <LocalTooltipProvider
      value={{
        isOpen,
        setIsOpen,
        x,
        y,
        followCursor,
        followCursorSpringOptions,
      }}
    >
      <TooltipPrimitive.Root
        data-slot="tooltip"
        {...props}
        onOpenChange={setIsOpen}
      />
    </LocalTooltipProvider>
  );
}

/* -------------------------------- Trigger -------------------------------- */

type TooltipTriggerProps = React.ComponentProps<
  typeof TooltipPrimitive.Trigger
>;

function TooltipTrigger({ onMouseMove, ...props }: TooltipTriggerProps) {
  const { x, y, followCursor } = useTooltip();

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    onMouseMove?.(event);

    if (!followCursor) return;

    const rect = event.currentTarget.getBoundingClientRect();

    if (followCursor === 'x' || followCursor === true) {
      const offsetX =
        (event.clientX - rect.left - rect.width / 2) / 2;
      x.set(offsetX);
    }

    if (followCursor === 'y' || followCursor === true) {
      const offsetY =
        (event.clientY - rect.top - rect.height / 2) / 2;
      y.set(offsetY);
    }
  };

  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      onMouseMove={handleMouseMove}
      {...props}
    />
  );
}

/* -------------------------------- Content -------------------------------- */

type TooltipContentProps = Omit<
  React.ComponentProps<typeof TooltipPrimitive.Content>,
  'asChild' | 'forceMount'
> &
  HTMLMotionProps<'div'>;

function TooltipContent({
  side = 'top',
  sideOffset = 4,
  align = 'center',
  style,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  className,
  ...props
}: TooltipContentProps) {
  const { x, y, followCursor, followCursorSpringOptions } =
    useTooltip();

  const translateX = useSpring(x, followCursorSpringOptions);
  const translateY = useSpring(y, followCursorSpringOptions);

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        side={side}
        sideOffset={sideOffset}
        align={align}
        className={className}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={transition}
          style={{
            x:
              followCursor === 'x' || followCursor === true
                ? translateX
                : undefined,
            y:
              followCursor === 'y' || followCursor === true
                ? translateY
                : undefined,
            ...style,
          }}
          {...props}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

/* -------------------------------- Arrow -------------------------------- */

type TooltipArrowProps = React.ComponentProps<
  typeof TooltipPrimitive.Arrow
>;

function TooltipArrow(props: TooltipArrowProps) {
  return (
    <TooltipPrimitive.Arrow
      data-slot="tooltip-arrow"
      {...props}
    />
  );
}

/* -------------------------------- Exports -------------------------------- */

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  useTooltip,
  type TooltipProviderProps,
  type TooltipProps,
  type TooltipTriggerProps,
  type TooltipContentProps,
  type TooltipArrowProps,
  type TooltipContextType,
};