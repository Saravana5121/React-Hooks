import { useRef, useEffect, useState } from "react";

function UseRef() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to handle mouse down event
    const startDrawing = (e) => {
      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    // Function to handle mouse move event
    const draw = (e) => {
      if (!isDrawing) return;
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
    };

    // Function to handle mouse up event
    const stopDrawing = () => {
      setIsDrawing(false);
    };

    // Attach event listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);

    // Cleanup function
    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
    };
  }, [isDrawing]);

  return (
    <div>
      <div className="max-w-lg m-20 p-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center gap-2 flex-col">
          <h2 className="text-gray-800 font-bold text-xl mb-2">
            useState Hook
          </h2>
          <h2 className="text-gray-800 font-bold text-xl mb-2">
            Canvas Drawing
          </h2>

          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            style={{ border: "1px solid blue" }}
          />
          <p>Click and drag on the canvas to draw.</p>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
