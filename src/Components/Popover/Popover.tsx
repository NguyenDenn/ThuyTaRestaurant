import { useFloating, FloatingPortal, arrow, shift, offset } from '@floating-ui/react'
import { ElementType, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
}

export default function Popover({ children, renderPopover, className, as: Element = 'div' }: Props) {
  const id = useId()
  const arrowRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { refs, floatingStyles, middlewareData } = useFloating({
    transform: false,
    middleware: [
      offset(5),

      shift(),
      arrow({
        element: arrowRef
      })
    ],
    placement: 'bottom-end',
    open: isOpen,
    onOpenChange: setIsOpen
  })
  const showPopover = () => {
    setIsOpen(true)
  }
  const hidePopover = () => {
    setIsOpen(false)
  }
  return (
    <Element className={className} ref={refs.setReference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{ ...floatingStyles, transformOrigin: `${middlewareData.arrow?.x}px top` }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <span
                ref={arrowRef}
                className='border-x-transparent border-t-transparent border-b-white absolute border-[11px] -translate-y-[96%] z-10'
                style={{
                  position: 'absolute',
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
