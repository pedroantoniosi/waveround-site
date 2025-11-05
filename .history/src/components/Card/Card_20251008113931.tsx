import wH110 from "../../assets/img/headsets/W-H110.png";
import wH110B from "../../assets/img/headsets/W-H110B.png";
import wH110G from "../../assets/img/headsets/W-H110G.png";

export function Card() {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={wH110} alt="" />
        </div>
        <div className="caption">
          <div className="row gap-1">
            <s>Texto riscado</s>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={wH110B} alt="" />
        </div>
        <div className="caption">
          <h2>Headset Waveround H110B Bluetooth</h2>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={wH110G} alt="" />
        </div>
        <div className="caption">
          <h2>Headset Waveround H110G Gaming Edition</h2>
        </div>
      </div>
    </>
  );
}
