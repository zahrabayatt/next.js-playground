import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

interface Props {
  name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        {/* <Body style={{ background: "black" }}> */}
        <Body style={body}>
          <Container>
            <Text style={heading} className="font-bold">
              Hello {name}
            </Text>
            <Link href="https://codewithme.com">www.codewithme.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#ffd",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;

// There is two ways to style our email:
// 2- CSS properties like inline style
// 1- Tailwind css
