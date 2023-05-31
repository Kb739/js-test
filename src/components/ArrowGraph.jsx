import React, { useMemo } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
const containerStyle = {
  height: "500px",
  margin: "20px",
  border: "2px solid blue",
  position: "relative",
};
const boxStyle = {
  position: "absolute",
  padding: "10px",
  width: "10rem",
  border: "1px solid black",
};

const sample = {
  info: [
    {
      id: "element1",
      label: "Element 1",
      relations: [
        {
          targetId: "element2",
          targetAnchor: "top",
          sourceAnchor: "bottom",
          style: { lineStyle: "straight" },
        },
      ],
      pos: {
        top: 0,
        left: 100,
      },
    },
    {
      id: "element2",
      label: "Element 2",
      relations: [
        {
          targetId: "element3",
          targetAnchor: "left",
          sourceAnchor: "right",
          style: { lineStyle: "straight" },
        },
      ],
      pos: {
        top: 100,
        left: 0,
      },
    },
    {
      id: "element3",
      label: "Element 3",
      relations: [
        {
          targetId: "root",
          targetAnchor: "right",
          sourceAnchor: "left",
          style: { lineStyle: "straight" },
        },
      ],
      pos: {
        top: 100,
        left: "50%",
      },
    },
  ],
};
const App = () => {
  const elements = useMemo(() => {
    return sample.info.map((obj) => {
      return (
        <ArcherElement id={obj.id} relations={obj.relations}>
          <div style={{ ...boxStyle, ...obj.pos }}>{obj.label}</div>
        </ArcherElement>
      );
    });
  }, []);
  return (
    <ArcherContainer strokeColor="red">
      <div style={containerStyle}>{elements}</div>
    </ArcherContainer>
  );
};

export default App;
