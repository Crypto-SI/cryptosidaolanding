"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const globeRef = useRef<any>(null)
  const rotation = useRef(0)

  useEffect(() => {
    if (!canvasRef.current || globeRef.current) return

    let width = 0
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    globeRef.current = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 0.1], // Changed to green
      glowColor: [1, 1, 1],
      markers: [
        // London
        { location: [51.5072, -0.1276], size: 0.05 },
        // Ghana (Accra)
        { location: [5.6037, -0.1870], size: 0.05 },
      ],
      onRender: (state) => {
        // This prevents rotation when dragging
        state.phi = rotation.current;
        state.theta = 0.2
        rotation.current += 0.005
      },
    })

    return () => {
      globeRef.current?.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="relative aspect-square w-full max-w-[600px] mx-auto">
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{
                contain: "layout paint size",
                cursor: "auto",
            }}
        />
    </div>
  )
}
