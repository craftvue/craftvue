import React from 'react'
import './HeadingWithAnchor.style.scss'

interface HeadingWithAnchorProps {
  level: 2 | 3
  id: string
  children: React.ReactNode
}

const HeadingWithAnchor = ({ level, id, children }: HeadingWithAnchorProps) => {
  const anchorUrl = `#${id}`

  if (level === 2) {
    return (
      <h2 id={id} className="sb-anchor sb-anchor-h2">
        <span className="sb-anchor-content sb-unstyled">{children}</span>
        <a
          href={anchorUrl}
          target="_self"
          className="sb-anchor-link"
          aria-label="Anchor link"
        ></a>
      </h2>
    )
  }

  return (
    <h3 id={id} className="sb-anchor sb-anchor-h3">
      <span className="sb-anchor-content sb-unstyled">{children}</span>
      <a
        href={anchorUrl}
        target="_self"
        className="sb-anchor-link"
        aria-label="Anchor link"
      ></a>
    </h3>
  )
}

export default HeadingWithAnchor
