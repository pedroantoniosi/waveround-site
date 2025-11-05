import wH110 from "../../assets/img/headsets/W-H110.png";

export function Card() {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={wH110} alt="" />
        </div>
        <div className="caption">
          <h2>Headset Waveround H110</h2>
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
          <img src={wH100PRO} alt="" />
        </div>
        <div className="caption">
          <h2>Headset Waveround H110X Gamer</h2>
        </div>
      </div>
    </>
  );
}
