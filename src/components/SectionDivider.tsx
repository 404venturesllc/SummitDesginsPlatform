/**
 * SectionDivider component creates a horizontal divider line with "+" cross
 * symbols where it meets the vertical side lines.
 */

export default function SectionDivider() {
  const lineColor = '#c8c8c8';
  const lineWidth = 1;

  // Cross dimensions
  const crossSize = 16; // Size of the + symbol
  const gapSize = 20; // Gap between the main lines and the cross
  const edgeGap = 20; // Gap from left/right screen edges

  // Position of vertical lines (from center)
  const lineOffset = 500;

  // Simple + cross component
  const Cross = ({ side }: { side: 'left' | 'right' }) => (
    <div
      className="absolute"
      style={{
        [side]: `calc(50% - ${lineOffset}px)`,
        top: '50%',
        transform: `translate(${side === 'left' ? '-50%' : '50%'}, -50%)`,
        zIndex: 20,
      }}
    >
      {/* Vertical bar of + */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: lineWidth + 'px',
          height: crossSize + 'px',
          backgroundColor: lineColor,
          zIndex: 22,
        }}
      />

      {/* Horizontal bar of + */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: crossSize + 'px',
          height: lineWidth + 'px',
          backgroundColor: lineColor,
          zIndex: 22,
        }}
      />
    </div>
  );

  return (
    <div className="relative w-full" style={{ height: '1px' }}>
      {/* Left cross */}
      <Cross side="left" />

      {/* Right cross */}
      <Cross side="right" />

      {/* Horizontal line - far left */}
      <div
        className="absolute"
        style={{
          left: edgeGap + 'px',
          right: `calc(50% + ${lineOffset}px + ${gapSize}px)`,
          top: '50%',
          transform: 'translateY(-50%)',
          height: lineWidth + 'px',
          backgroundColor: lineColor,
          borderRadius: '1px',
          zIndex: 10,
        }}
      />

      {/* Horizontal line - center */}
      <div
        className="absolute"
        style={{
          left: `calc(50% - ${lineOffset}px + ${gapSize}px)`,
          right: `calc(50% - ${lineOffset}px + ${gapSize}px)`,
          top: '50%',
          transform: 'translateY(-50%)',
          height: lineWidth + 'px',
          backgroundColor: lineColor,
          borderRadius: '1px',
          zIndex: 10,
        }}
      />

      {/* Horizontal line - far right */}
      <div
        className="absolute"
        style={{
          right: edgeGap + 'px',
          left: `calc(50% + ${lineOffset}px + ${gapSize}px)`,
          top: '50%',
          transform: 'translateY(-50%)',
          height: lineWidth + 'px',
          backgroundColor: lineColor,
          borderRadius: '1px',
          zIndex: 10,
        }}
      />
    </div>
  );
}
