import {
  Button,
  CodeInline,
  Column,
  Container,
  Head,
  Html,
  Link,
  Row,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const MyEmail = () => {
  return (
    <Tailwind>
      <Html>
        <Head>
          <title>Welcome</title>
        </Head>
        <Container className="bg-gray-400">
          <Row>
            <Column>
              <Text className="text-red-500">
                123
                <CodeInline className="rounded-[6px] bg-gray-300 px-[4px] py-[2px]">
                  @twitter/welcome
                </CodeInline>
                <Link href="https://example.com" className="text-blue-500">
                  Example Link
                </Link>
              </Text>
            </Column>
            <Column>2</Column>
            <Column>
              <Button
                href="https://example.com"
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "12px 20px",
                }}
              >
                Click me
              </Button>
            </Column>
          </Row>
        </Container>
      </Html>
    </Tailwind>
  );
};

export default MyEmail;
