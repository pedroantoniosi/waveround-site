import { Container } from "../Container/Container";
import wH110 from "../../assets/img/headsets/W-H110.png";
import wH110B from "../../assets/img/headsets/W-H110B.png";
import wH100PRO from "../../assets/img/headsets/W-H110.png";

export function Template() {
  return (
    <Container>
      <div className="template-container">
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
            <h2>Headset Waveround H110X</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}
