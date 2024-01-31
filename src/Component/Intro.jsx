import { Container } from "react-bootstrap";
import LawForm from "./LawForm";
import Headliner from "./Headliner";
import ImageSlider from "./ImageSlider";

const Intro = () => {
  const slides = [
    { url: "http://localhost:3000/better-call-saul-ciakclub-768x432.jpg", title: "Better Call Saul" },
    { url: "http://localhost:3000/bob-odenkirk.jpg", title: "Better Call Saul" },
    { url: "http://localhost:3000/220719-schager-better-call-saul-hero_csdbby-1024x576.jpg", title: "Better Call Saul" },
  ];
  const containerStyles= {
    width: "700px",
    height: "400px",
    margin: "0 auto",
  }

  return (
    <>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      <Container className="d-flex justify-content-center">
        <div
          style={{
            backgroundColor: "#3d88cb",
            width: "80%",
            marginTop: "6rem",
            marginBottom: "6rem",
            boxShadow: "50px",
          }}
        >
          <h3
            style={{
              marginInline: "50px",
              marginTop: "30px",
              textAlign: "start",
            }}
          >
            <span className="fw-bold">
              Benvenuti nello Studio Legale di Jimmy McGill, Cassazionista
            </span>{" "}
          </h3>
          <h5
            style={{
              marginInline: "50px",
              marginBottom: "30px",
              textAlign: "start",
            }}
          >
            Siamo lieti di accogliervi nel nostro Studio Legale specializzato in
            cassazione, dedicato a fornire consulenza e rappresentanza legale di
            altissimo livello. La nostra pratica legale si concentra
            principalmente sulla cassazione, la cui competenza richiede una
            conoscenza approfondita del diritto e una vasta esperienza nelle
            procedure di questa giurisdizione.
          </h5>
        </div>
      </Container>
      <LawForm />
    </>
  );
};

export default Intro;
