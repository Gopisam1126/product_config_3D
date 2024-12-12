import { chairColors, cushionColors, useCustomization } from "../context/customization";

function Configurator() {
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColor,
    setChairColor,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <>
      <section className="config-main-s">
        <h1>Configurator</h1>
        <div className="item-config">
          <h1 className="material-config item-config-h">Material</h1>
          <div className="config-texture-labels">
            <p
              style={{
                color: material === "leather" ? "#fff" : "#8B8B8B",
                opacity: 1,
              }}
              className="ctl-leather"
              onClick={() => setMaterial("leather")}
            >
              Leather
            </p>
            <p
              style={{
                color: material === "fabric" ? "#fff" : "#8B8B8B",
                opacity: 1,
              }}
              className="ctl-fabric"
              onClick={() => setMaterial("fabric")}
            >
              Fabric
            </p>
          </div>
        </div>

        {/* Legs configurator */}

        <div className="item-config">
          <h1 className="item-config-h legs-config">Legs</h1>
          <div className="config-texture-labels">
            <p
              style={{
                color: legs === "design" ? "#fff" : "#8B8B8B",
                opacity: 1,
              }}
              className="ctl-leather"
              onClick={() => setLegs("design")}
            >
              Design
            </p>
            <p
              style={{
                color: legs === "classic" ? "#fff" : "#8B8B8B",
                opacity: 1,
              }}
              className="ctl-fabric"
              onClick={() => setLegs("classic")}
            >
              Classic
            </p>
          </div>
        </div>

        {/* Chair color configurator */}

        <h1 className="item-config-h cc-config">Chair color</h1>
        <div className="item-config-color">
          {chairColors.map((color, i) => (
            <div
              className="config-color-labels"
              key={i}
              onClick={() => setChairColor(color)}
            >
              <div
                className="color-i"
                style={{
                  backgroundColor: color.color,
                  border:
                    color.color === chairColor.color
                      ? "solid 2px white"
                      : "none",
                }}
              ></div>
              <p className="ctl-leather">{color.name}</p>
            </div>
          ))}
        </div>

        {/* cushion color config */}

        <h1 className="item-config-h cc-config">Cushion color</h1>
        <div className="item-config-color">
          {cushionColors.map((color, i) => (
            <div
              className="config-color-labels"
              key={i}
              onClick={() => setCushionColor(color)}
            >
              <div
                className="color-i"
                style={{
                  backgroundColor: color.color,
                  border:
                    color.color === cushionColor.color
                      ? "solid 2px white"
                      : "none",
                }}
              ></div>
              <p className="ctl-leather">{color.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Configurator;
