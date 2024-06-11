import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

const Statement = () => {
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
            fontFamily='Roboto'
            fallbackFontFamily={['Verdana', 'Arial', 'sans-serif']}
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2)',
              format: 'woff2',
            }}
          />
        </Head>
        <Body className='text-primary m-0 h-fit w-fit text-base'>
          {/* <Preview>Email preview text</Preview> */}
          <Container className='bg-background h-fit w-fit min-w-[544px] py-12'>
            <Container className='h-fit w-fit max-w-[500px] rounded-3xl px-8'>
              <Section align='center' className='w-fit'>
                <Img
                  src='https://media.infotravel.com.br/image/upload/7b3a7797711c3c3bcd558d972cbd1465.png'
                  width={300}
                  height={70}
                  className='align-middle'
                />
              </Section>
              <Section className='mt-8'>
                <Text className='text-primary m-0 text-base'>
                  São Paulo, 15 de Março de 2024.
                </Text>
                <Text className='text-primary m-0 mt-6 text-base'>
                  Prezados Clientes,
                </Text>
                <Text className='text-primary m-0 mt-6 text-base'>
                  Gostaríamos de notificar sobre uma mudança em um dos filtros
                  de pré-pesquisa para produtos aéreos.
                </Text>
                <Text className='text-primary m-0 mt-6 text-base'>
                  Devido as limitações de algumas API’S aéreas, não será mais
                  possível efetuar pesquisas com{' '}
                  <span className='text-accent'>bagagem “Todos”.</span>
                </Text>
                <Text className='text-primary m-0 mt-6 text-base'>
                  Esta opção será removida, e o motor de busca que obter esse
                  item configurado alteraremos para{' '}
                  <span className='text-accent'>“Não”</span> como{' '}
                  <span className='text-accent'>padrão.</span>
                </Text>
                <Text className='text-primary m-0 mt-6 text-base'>
                  Caso deseje que seja igual a{' '}
                  <span className='text-accent'>“Sim”</span> a pesquisa padrão,
                  faça alteração do motor de busca{' '}
                  <span className='text-accent'>neste caminho.</span>
                </Text>

                <Text className='text-accent m-0 mt-6 text-base'>
                  Todo e qualquer usuário conseguirá alterar a pesquisa para
                  Bagagem? “Sim” ou “Não”, o que não será mais possível é
                  pesquisar tudo de uma vez, como a função “Todos” realizava.
                </Text>
                <Text className='text-primary m-0 mt-6 text-base'>
                  Contamos com sua compreensão e estamos à disposição para
                  quaisquer dúvidas.
                </Text>
              </Section>
              <Section className='mt-6'>
                <Text className='text-primary m-0 text-base'>
                  Atenciosamente,
                </Text>
                <Text className='text-primary m-0 text-base font-bold'>
                  Equipe Infrotravel
                </Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default Statement;
