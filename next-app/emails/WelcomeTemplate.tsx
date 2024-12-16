import React from "react";
import {
  Html,
  Body,
  Container,
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
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://codewithme.com">www.codewithme.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
