import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import MapG from "./MapG";

const Contacts = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const hS = {
    color: "white",
    fontWeight: "bold",
    marginTop: "10px",
    marginBotton: "0px",
  };
  return (
    <>
      <h1 style={hS}>Contatti</h1>
      <Container className="d-flex mt-3 mb-5">
        <div
          style={{
            width: "50%",
            textAlign: "start",
            backgroundColor: "#3d88cb",
            paddingInline: "50px",
            paddingBlock: "30px",
            marginRight: "30px",
          }}
        >
          <h2 className="fw-bold">Orari di apertura:</h2>
          <h5 className="m-0">
            <span className="fw-bold">Lunedì-Mercoledi-Venerdì:</span>{" "}
            9:00-13:00 15:00-18:00
          </h5>
          <h5 className="m-0">
            <span className="fw-bold">Martedì-Giovedì:</span> 15:00-18:00
          </h5>
          <h2 className="fw-bold mt-5">Sede e contatti: </h2>
          <h5 className="m-0">
            <span className="fw-bold ">Indirizzo: </span>Via dei Vespri, 64
          </h5>
          <h5 className="m-0">
            <span className="fw-bold ">Numero di telefono: </span>+39 333 333
            3333
          </h5>
          <h5 className="m-0">
            <span className="fw-bold ">E-mail: </span>
            avvjimmymcgill@gmail.com
          </h5>
          <MapG />
        </div>
        <div
          style={{
            width: "50%",
            textAlign: "start",
            backgroundColor: "#3d88cb",
            paddingInline: "50px",
            paddingBlock: "30px",
          }}
        >
          {" "}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group md="4" controlId="validationCustom01" className=" mt-3">
              <Form.Label>Nome*</Form.Label>
              <Form.Control required type="text" placeholder="Inserire nome" />
              <Form.Control.Feedback>Ottimo!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02" className=" mt-3">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserire cognome"
              />
              <Form.Control.Feedback>Ottimo!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              md="4"
              controlId="validationCustomUsername"
              className=" mt-3"
            >
              <Form.Label>Email*</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Inserire e-mail"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Per favore scrivi una mail valida
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group md="6" controlId="validationCustom03" className=" mt-3">
              <Form.Label>Città*</Form.Label>
              <Form.Control type="text" placeholder="Città" required />
              <Form.Control.Feedback type="invalid">
                Per favore scrivi una città valida
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group md="3" controlId="validationCustom05" className=" mt-3">
              <Form.Label>CAP*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Scrivi il tuo CAP"
                required
              />
              <Form.Control.Feedback type="invalid">
                Perfavore scrivi un CAP valido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group md="3" controlId="validationCustom05" className=" mt-3">
              <Form.Label>Raccontaci il problema*</Form.Label>
              <Form.Control type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Perfavore completa il form
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button
              className="rounded-0 border border-0 px-3 py-2 fs-6 mt-3"
              style={{ backgroundColor: "#142340" }}
              type="submit"
            >
              Submit form
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Contacts;
