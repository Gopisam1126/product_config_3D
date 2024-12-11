import { useCustomization } from "../context/customization";

function Configurator() {
  const { material, setMaterial } = useCustomization();

  return (
    <>
      <section className="config-main-s">
        <h1>Configurator</h1>
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
      </section>
    </>
  );
}

export default Configurator;
