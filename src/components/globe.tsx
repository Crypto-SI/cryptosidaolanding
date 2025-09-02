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
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.requestAnimationFrame(() => {
          if (globeRef.current) {
            globeRef.current.resize()
          }
        })
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
      markerColor: [0.2, 0.6, 1],
      glowColor: [1, 1, 1],
      markers: [
        // London
        { location: [51.5072, -0.1276], size: 0.05 },
        // Ghana (Accra)
        { location: [5.6037, -0.1870], size: 0.05 },
        // Beijing
        { location: [39.9042, 116.4074], size: 0.05 },
        // Georgetown, Guyana
        { location: [6.8013, -58.1551], size: 0.05 },
        // New York
        { location: [40.7128, -74.0060], size: 0.05 },
        // Toronto
        { location: [43.6532, -79.3832], size: 0.05 },
        // Banjul
        { location: [13.4549, -16.5790], size: 0.05 },
        // Cape Town
        { location: [-33.9249, 18.4241], size: 0.05 },
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
