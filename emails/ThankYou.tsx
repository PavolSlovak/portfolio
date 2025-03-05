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

interface WelcomeEmailProps {
  name: string;
}

export const ThankYou = ({ name }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Container style={container}>
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Thank you for reaching out! I appreciate your message and will get
          back to you as soon as possible.
        </Text>
        <Text style={paragraph}>
          In the meantime, feel free to check out my latest work or connect with
          me on LinkedIn.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={process.env.VERCEL_URL}>
            View My Work
          </Button>
        </Section>
        <Text style={paragraph}>
          Best regards,
          <br />
          Pavol Slovak
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Thanks again for getting in touch!</Text>
      </Container>
    </Body>
  </Html>
);

export default ThankYou;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
  borderRadius: "50%",
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
