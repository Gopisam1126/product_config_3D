import { useCustomization } from "../context/customization";

function Configurator() {
  const { material, setMaterial, legs, setLegs } = useCustomization();

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
      </section>
    </>
  );
}

export default Configurator;
