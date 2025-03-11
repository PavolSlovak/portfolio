import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface OfferProps {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Offer = ({ name, email, company, message }: OfferProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>You revieved offer from {company}</Preview>
      <Container style={container}>
        <Text style={paragraph}>Message:</Text>
        <Text style={paragraph}>{message}</Text>
        <Text style={paragraph}>Company: {company}</Text>

        <Text style={paragraph}>
          Email: {email}
          <br />
          Recieved from: {name}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Thanks again for getting in touch!</Text>
      </Container>
    </Body>
  </Html>
);

export default Offer;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
