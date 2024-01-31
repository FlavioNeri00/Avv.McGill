import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

const LawForm = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Container className="d-flex mb-5 ">
        <div
          style={{
            width: "50%",
            textAlign: "start",
            backgroundColor: "#3d88cb",
            paddingInline: "50px",
            paddingBlock: "30px",
            marginInlineEnd: "30px",
          }}
        >
          <h3 className="fw-bold" style={{ marginBottom: "30px" }}>
            Cosa possiamo offrirvi: <br></br>
          </h3>
          <h5>
            <span className="fw-bold fs-4"> Servizi Legali in Cassazione:</span>{" "}
            <br></br> I nostri servizi legali in materia di cassazione coprono
            una vasta gamma di aree del diritto, tra cui: <br></br>
            <span className="fw-bold">
              Cassazione Civile <br></br> Cassazione Penale <br></br>
              Cassazione Amministrativa{" "}
            </span>
          </h5>
          <h5>
            <span className="fw-bold fs-4">Approccio Esperto:</span> <br></br>{" "}
            Riconosciamo l'importanza cruciale della cassazione nella giustizia
            e ci impegniamo a offrire un approccio esperto per garantire la
            migliore rappresentazione possibile. Ogni caso è gestito con
            attenzione ai dettagli e con una strategia mirata per massimizzare
            le possibilità di successo in cassazione.
          </h5>
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

            <Form.Group md="3" controlId="validationCustom06" className=" mt-3">
              <Form.Label>Raccontaci il problema*</Form.Label>
              <Form.Control type="textarea" placeholder="" required />
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

export default LawForm;
