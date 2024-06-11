import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

const Holiday = () => {
  const fontNormal = {
    fontFamily: 'Montserrat Classic Normal',
    fontWeight: 400,
  };
  const fontCursive = {
    fontFamily: 'Dancing Script',
    fontWeight: 400,
  };
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              background: '#0A2A4E',
              accent: '#03B47C',
              primary: '#fff',
            },
          },
        },
      }}>
      <Html lang='pt-BR'>
        <Head>
          <meta name='color-scheme' content='light dark' />
          <meta name='supported-color-schemes' content='light dark' />
          {/* <title>My email title</title> */}
          <Font
            fontFamily='Dancing Script'
            fallbackFontFamily={['cursive', 'fantasy', 'Georgia']}
            webFont={{
              url: 'https://fonts.gstatic.com/s/dancingscript/v25/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup8.woff2',
              format: 'woff2',
            }}
          />
          <Font
            fontFamily='Montserrat Classic Normal'
            fallbackFontFamily={['Verdana', 'Arial', 'sans-serif']}
            webFont={{
              url: 'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2',
              format: 'woff2',
            }}
          />
        </Head>
        <Body
          className='text-primary m-0 h-fit w-fit text-base'
          style={fontNormal}>
          {/* <Preview>Email preview text</Preview> */}
          <Container className='bg-background h-fit w-fit min-w-[544px] py-10'>
            <Container className='h-fit w-fit max-w-[500px] rounded-3xl px-8'>
              <Section>
                <Section>
                  <Heading
                    as='h1'
                    m={0}
                    className='text-primary text-center text-xl font-normal uppercase leading-6'>
                    <b>info news</b> | comunicado importante
                  </Heading>
                  <Hr className='border-accent' />
                </Section>
                <Heading
                  as='h2'
                  m={0}
                  className='text-primary text-center text-5xl font-normal leading-[0px]'
                  style={fontCursive}>
                  Feriado
                </Heading>
              </Section>
              <Section className='text-lg'>
                <Section className='mt-12'>
                  <Text className='text-primary m-0 text-center text-base'>
                    Prezados clientes,
                  </Text>
                  <Text className='text-primary mt-6 text-center text-base'>
                    Devido ao <b>feriado</b> na{' '}
                    <b>quarta-feira, 1º de Maio NÃO</b> haverá{' '}
                    <b>expediente!</b>
                  </Text>
                  <Text className='text-primary m-0 mt-6 text-center text-base'>
                    Em caso de <b>emergência</b> durante esse período, acione o
                    nosso <b>suporte</b>, estaremos trabalhando em turnos
                    revezados para garantirmos assistência em{' '}
                    <b>casos urgentes.</b>
                  </Text>
                  <Text className='text-primary m-0 mt-6 text-center text-base'>
                    Agradecemos a compreensão e desejamos a todos um excelente
                    feriado
                  </Text>
                </Section>
                <Container className='mt-12'>
                  <Section>
                    <Row>
                      <Column>
                        <Img
                          src='https://media.infotravel.com.br/image/upload/7b3a7797711c3c3bcd558d972cbd1465.png'
                          width={125}
                          height={28}
                        />
                      </Column>
                      <Column align='right'>
                        <Img
                          src='https://media.infotravel.com.br/image/upload/0b99add8b828c500e762a3226ad8cd31.png'
                          width={125}
                          height={32}
                        />
                      </Column>
                    </Row>
                  </Section>
                </Container>
              </Section>
            </Container>
            <Container className='bg-accent mt-8'>
              <Section className='px-16 py-3'>
                <Row>
                  <Column>
                    <Section>
                      <Row>
                        <Column>
                          <Img
                            src='https://media.infotravel.com.br/image/upload/821ed5922f3e981e12e01b2aaba75a7f.png'
                            width={36}
                            height={36}
                            className='mr-4 rounded-full'
                          />
                        </Column>
                        <Column>
                          <Text className='text-background m-0 w-40 text-lg font-medium'>
                            Quarta-feira
                          </Text>
                          <Text className='text-background m-0 text-lg'>
                            <b>01 de MAIO</b>
                          </Text>
                        </Column>
                      </Row>
                    </Section>
                  </Column>
                  <Column align='left'>
                    <Section className='pl-24'>
                      <Text className='text-background m-0 text-lg font-bold'>
                        Dia do
                      </Text>
                      <Text className='text-background m-0 text-lg font-bold'>
                        Trabalhador
                      </Text>
                    </Section>
                  </Column>
                </Row>
              </Section>
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default Holiday;
