/**
 * VerticalSideLines component renders vertical lines on both left and right sides.
 * Add this to each section to create distinct vertical line segments that
 * connect to the SectionDivider crosshairs at section boundaries.
 *
 * The lines are positioned at calc(50% - 500px) and calc(50% + 500px)
 * to align with the SectionDivider crosshairs.
 */

export default function VerticalSideLines() {
  const lineColor = '#c8c8c8'; // Must match SectionDivider
  const lineWidth = 1;
  const gapSize = 20; // Gap from cross marks, must match SectionDivider gapSize

  return (
    <>
      {/* Left vertical line */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: 'calc(50% - 500px)',
          top: gapSize,
          bottom: gapSize,
          transform: 'translateX(-50%)',
          width: lineWidth + 'px',
          backgroundColor: lineColor,
          zIndex: 10,
        }}
      />
      {/* Right vertical line */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: 'calc(50% - 500px)',
          top: gapSize,
          bottom: gapSize,
          transform: 'translateX(50%)',
          width: lineWidth + 'px',
          backgroundColor: lineColor,
          zIndex: 10,
        }}
      />
    </>
  );
}
