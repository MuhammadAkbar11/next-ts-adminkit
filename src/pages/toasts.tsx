import Head from 'next/head';
import React from 'react';
import AdminLayout from '@layouts/AdminLayout';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useNotification from '@hooks/useNotification';

type Props = {};

export default function ToastsPage({}: Props) {
  const notify = useNotification({});

  return (
    <>
      <Head>
        <title>Toast | AdminKit Demo</title>
      </Head>
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Toast</h1>
        <Row className="row">
          <Col xs={12}>
            <Card>
              <Card.Header>
                <Card.Title className="">Toast notifications</Card.Title>
                <Card.Subtitle as="h6" className="text-muted">
                  Toast notification using <code>react-hot-toast</code>. See
                  official documentation{' '}
                  <a
                    href="https://react-hot-toast.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    here
                  </a>
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className="gap-2 d-flex ">
                <Button
                  variant="primary"
                  onClick={() => notify.primary('This is primary toast')}
                >
                  Primary
                </Button>
                <Button
                  variant="success"
                  onClick={() => notify.success('This is success toast')}
                >
                  Success
                </Button>
                <Button
                  variant="danger"
                  onClick={() => notify.danger('This is danger toast')}
                >
                  Danger
                </Button>
                <Button
                  variant="info"
                  onClick={() => notify.info('This is info toast')}
                >
                  Info
                </Button>
                <Button
                  variant="warning"
                  onClick={() => notify.warning('This warning toast')}
                >
                  Warning
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

ToastsPage.layout = AdminLayout;
