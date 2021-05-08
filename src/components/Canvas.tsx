import React, { useRef, useEffect } from 'react'

export default props => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const x = 10.5
        const y = 60.5
        const w = 220
        const h = 90
        const radius = 20
        var r = x + w;
        var b = y + h;
        
        //Our first draw
        context.beginPath();
        context.strokeStyle="black";
        context.lineWidth="2";
        context.moveTo(x+radius, y);
        context.lineTo(x+radius/2, y-10);
        context.lineTo(x+radius * 2, y);
        context.lineTo(r-radius, y);
        context.quadraticCurveTo(r, y, r, y+radius);
        context.lineTo(r, y+h-radius);
        context.quadraticCurveTo(r, b, r-radius, b);
        context.lineTo(x+radius, b);
        context.quadraticCurveTo(x, b, x, b-radius);
        context.lineTo(x, y+radius);
        context.quadraticCurveTo(x, y, x+radius, y);
        context.stroke();
        context.lineWidth = "3";
        context.strokeStyle = "green";
        context.stroke();
    }, []);
  
    return <canvas ref={canvasRef} {...props}/>
}