import React from 'react'
import { cn } from '@/utils/helpers'

/**
 * Production-grade Button component.
 * Supports three variants, two sizes, loading state, and icon slots.
 */
const VARIANTS = {
  primary:   'btn-primary text-white',
  secondary: 'btn-secondary',
  ghost:     'btn-ghost',
}

const SIZES = {
  sm: 'text-sm px-5 py-2.5',
  md: 'text-base',
  lg: 'text-lg px-9 py-4',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className,
  as: Component = 'button',
  ...props
}) {
  const isDisabled = disabled || loading

  return (
    <Component
      className={cn(
        VARIANTS[variant],
        SIZES[size],
        isDisabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={Component === 'button' ? isDisabled : undefined}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </Component>
  )
}