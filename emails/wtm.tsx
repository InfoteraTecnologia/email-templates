import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

const Wtm = () => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: '#fff',
              secondary: '#0A2A4E',
              accent: '#03B47C',
            },
            backgroundImage: {
              background:
                "url('https://media.infotravel.com.br/image/upload/1622c81af98742f93e373b85f8deab0e.png')",
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
            fontFamily='Montserrat'
            fallbackFontFamily={['Verdana', 'Arial', 'sans-serif']}
            webFont={{
              url: 'https://fonts.gstatic.com/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRyS7m.woff2',
              format: 'woff2',
            }}
            fontStyle='italic'
          />
          <Font
            fontFamily='Montserrat'
            fallbackFontFamily={['Verdana', 'Arial', 'sans-serif']}
            webFont={{
              url: 'https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2',
              format: 'woff2',
            }}
          />
        </Head>
        <Body className='text-primary m-0 h-fit w-fit'>
          {/* <Preview>Email preview text</Preview> */}
          <Container className='bg-background h-fit min-h-[744px] w-fit min-w-[544px] bg-contain bg-center bg-no-repeat'>
            <Section className='px-14'>
              <Hr className='border-accent border-2' />
              <Img
                src='https://media.infotravel.com.br/image/upload/6c7ea21b7cbf1d0a7a208f8092324da6.png'
                width={330}
                height={110}
                className='mt-20 align-middle'
              />
            </Section>
            <Section className='mt-24 px-14'>
              <Row>
                <Column>
                  <Img
                    src='https://media.infotravel.com.br/image/upload/7b3a7797711c3c3bcd558d972cbd1465.png'
                    width={180}
                    height={40}
                    className=''
                  />
                </Column>
                <Column align='right'>
                  <Img
                    src='https://media.infotravel.com.br/image/upload/0b99add8b828c500e762a3226ad8cd31.png'
                    width={180}
                    height={40}
                    className=''
                  />
                </Column>
              </Row>
            </Section>
            <Section className='mt-16 pr-8'>
              <Row>
                <Column align='right'>
                  <Text className='m-0 text-xl uppercase'>
                    venha nos visitar!
                  </Text>
                  <Text className='m-0 text-xl uppercase italic'>
                    come visit us!
                  </Text>
                  <Text className='text-accent m-0 text-xl font-bold uppercase italic'>
                    stand e120
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section className='mt-14 px-[66px]'>
              <Row>
                <Column>
                  <Section>
                    <Row>
                      <Column>
                        <Img
                          src='https://media.infotravel.com.br/image/upload/821ed5922f3e981e12e01b2aaba75a7f.png'
                          width={40}
                          height={40}
                          className='mr-2 block rounded-full border-0'
                        />
                      </Column>
                      <Column>
                        <Text className='text-secondary m-0 text-xl font-bold'>
                          15 a 17 Abril
                        </Text>
                        <Text className='text-primary m-0 text-lg'>
                          12h00 - 20h00
                        </Text>
                      </Column>
                    </Row>
                  </Section>
                </Column>
                <Column>
                  <Section className='pr-4'>
                    <Row>
                      <Column align='right'>
                        <Text className='text-secondary m-0 text-xl font-bold'>
                          Expo Center Norte
                        </Text>
                      </Column>
                    </Row>
                    <Row align='right' className='w-fit'>
                      <Column align='right'>
                        <Img
                          src='https://media.infotravel.com.br/image/upload/9a16dfdee35617d612fea6cfa5a4bdde.png'
                          width={24}
                          height={24}
                          className='mr-1 align-middle'
                        />
                      </Column>
                      <Column className='w-fit'>
                        <Text className='text-primary m-0 w-fit text-lg'>
                          São Paulo
                        </Text>
                      </Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default Wtm;
