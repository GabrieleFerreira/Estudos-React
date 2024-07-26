// tests/AnimatedCountdown.test.tsx
import AnimatedCountdown from '@/app/exemUseEffect/UseEffectExample'
import '@testing-library/jest-dom/extend-expect'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

describe('AnimatedCountdown Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('deve renderizar corretamente', () => {
    render(<AnimatedCountdown />)
    expect(screen.getByText('Animated Countdown')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('deve iniciar a contagem regressiva ao clicar em "Iniciar"', () => {
    render(<AnimatedCountdown />)

    fireEvent.click(screen.getByText('Iniciar'))

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('9')).toBeInTheDocument()
  })

  it('deve pausar a contagem regressiva ao clicar em "Pausar"', () => {
    render(<AnimatedCountdown />)

    fireEvent.click(screen.getByText('Iniciar'))
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    fireEvent.click(screen.getByText('Pausar'))

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText('9')).toBeInTheDocument()
  })

  it('deve reiniciar a contagem regressiva ao clicar em "Reiniciar"', () => {
    render(<AnimatedCountdown />)

    fireEvent.click(screen.getByText('Iniciar'))
    fireEvent.click(screen.getByText('Reiniciar'))

    expect(screen.getByText('10')).toBeInTheDocument()
  })

  afterEach(() => {
    vi.useRealTimers()
  })
})
