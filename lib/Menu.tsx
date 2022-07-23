import { classes } from "./css";
import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef
} from "react";
import { createPortal } from "react-dom";

export type MenuProps = {
  anchor?: HTMLElement | null
  onClose?: (reason: "backdrop" | "clickOutside") => void
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  hideBackdrop?: boolean
}

export const Menu = forwardRef<HTMLDivElement, PropsWithChildren<MenuProps>>(function MenuRoot(props, ref) {
  const {
    anchor,
    onClose,
    onClick,
    hideBackdrop,
    children
  } = props
  const rootRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (
        hideBackdrop &&
        anchor &&
        onClose &&
        e.target && !rootRef.current?.contains(e.target as any)
      ) {
        onClose("clickOutside")
      }
    }
    document.addEventListener("click", fn)
    return () => document.removeEventListener("click", fn)
  }, [anchor])

  const content = <div
    className={classes.root}
    ref={(el) => {
      if (!el) return
      if (typeof ref === "function") ref(el)
      else if (ref && typeof ref === "object") {
        ref.current = el
      }
      rootRef.current = el
    }}
    onClick={(e) => {
      e.stopPropagation()
      onClick?.(e)
    }}
    style={{
      display: anchor ? "block" : "none",
      backgroundColor: "red",
      left: anchor?.offsetLeft ?? 0,
      top: anchor?.offsetTop ?? 0,
      zIndex: 1
    }}>
    {anchor && children}
  </div>

  return createPortal(
    hideBackdrop ? content :
      <div className={classes.menuBackdrop}
           style={{
             display: anchor ? "block" : "none",
             zIndex: 1
           }}
           onClick={() => onClose?.("backdrop")}>
        {content}
      </div>,
    document.body
  )

})
