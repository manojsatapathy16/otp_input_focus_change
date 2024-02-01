import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000'); // Default color is red

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <ChromePicker color={color} onChange={handleColorChange} />
      <div style={{ marginTop: '20px' }}>
        <p>Selected Color: {color}</p>
        <div style={{ width: '50px', height: '50px', backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default ColorPicker;
