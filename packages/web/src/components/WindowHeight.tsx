import { useEffect } from "react";
import useResizeObserver from "use-resize-observer";

const BoxInner = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="pt-4">innerHeight: {window.innerHeight}px</div>
    </div>
  );
};

const BoxVh = () => {
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 h-screen">
      <div className="pt-8">
        100vh: {width} x {height}px
      </div>
    </div>
  );
};

const BoxDvh = () => {
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  return (
    <div ref={ref} className="fixed top-0 left-0 w-screen h-dvh">
      <div className="pt-12">
        100dvh: {width} x {height}px
      </div>
    </div>
  );
};

export default function WindowHeight() {
  return (
    <div>
      <h3>Test Height</h3>
      <BoxInner />
      <BoxVh />
      <BoxDvh />
    </div>
  );
}
