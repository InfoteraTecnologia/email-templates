import {
    Body,
    Column,
    Container,
    Font,
    Head,
    Heading,
    Html,
    Img,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

const NewLocaltrip = () => {
    const fontBold = {
        fontFamily: 'Montserrat Classic Bold',
        fontWeight: 800,
    };
    const fontNormal = {
        fontFamily: 'Montserrat Classic Normal',
        fontWeight: 600,
    };
    return (
        <Tailwind
            config={{
                theme: {
                    extend: {
                        colors: {
                            accent: '#5CF0FF',
                            primary: '#7A3BF8',
                        },
                        backgroundImage: {
                            background:
                                "url('https://media.infotravel.com.br/image/upload/7584033dddff2aa790c37d34659d93d2.jpeg')",
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
                        fontFamily='Montserrat Classic Bold'
                        fallbackFontFamily={['Verdana', 'Arial', 'sans-serif']}
                        webFont={{
                            url: 'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCvr73w5aXo.woff2',
                            format: 'woff2',
                        }}
                        fontWeight={800}
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
                <Body className='text-primary m-0 h-fit w-fit text-base' style={fontNormal}>
                    {/* <Preview>Email preview text</Preview> */}
                    <Container className='bg-background h-fit min-h-[744px] w-fit min-w-[544px] bg-contain bg-center bg-no-repeat px-8 py-24'>
                        <Container
                            className='h-fit w-fit max-w-[480px] rounded-3xl !bg-white px-6 pb-6 pt-8 dark:!bg-white'
                            bgcolor='white'>
                            <Section>
                                <Heading as='h1' m={0} className='text-primary text-center text-4xl'>
                                    NOVIDADE LOCALTRIP
                                </Heading>
                                <Heading
                                    as='h2'
                                    m={0}
                                    className='text-primary mt-3 text-balance text-center text-2xl'
                                    style={fontBold}>
                                    <span className='text-accent' style={fontBold}>
                                        NORONHA TOUR
                                    </span>{' '}
                                    NO INFOTRAVEL
                                </Heading>
                            </Section>
                            <Section className='mt-8'>
                                <Text className='text-primary m-0'>
                                    Caro parceiro, informamos que a{' '}
                                    <b style={fontBold} className='uppercase'>
                                        NORONHA TOUR
                                    </b>{' '}
                                    está disponível através do{' '}
                                    <b style={fontBold} className='uppercase'>
                                        LOCALTRIP
                                    </b>{' '}
                                    para pesquisas e reservas em seu{' '}
                                    <b style={fontBold} className='uppercase'>
                                        INFOTRAVEL!
                                    </b>
                                </Text>
                                <Text className='text-primary m-0 mt-6'>
                                    Entre em contato com a{' '}
                                    <b style={fontBold} className='uppercase'>
                                        NORONHA TOUR
                                    </b>{' '}
                                    para a liberação do cadastro através do e-mail e telefone:{' '}
                                    <p className='m-0 uppercase' style={fontBold}>
                                        info@noronhatour.com.br
                                    </p>
                                </Text>
                            </Section>
                            <Section>
                                <Text className='text-primary m-0 mt-6'>
                                    <b style={fontBold} className='uppercase'>
                                        LIDIANE SASKIA
                                    </b>
                                    :{' '}
                                    <p className='m-0' style={fontBold}>
                                        (81) 99566-1649
                                    </p>
                                </Text>
                                <Text className='text-primary m-0'>
                                    <b style={fontBold} className='uppercase'>
                                        NORONHA TOUR
                                    </b>{' '}
                                    tem serviços cadastrados para:
                                </Text>
                            </Section>
                            <Section>
                                <ul className='m-0 mt-4 pl-5'>
                                    <li>
                                        <Text className='text-primary m-0 uppercase' style={fontBold}>
                                            BRASIL - FERNANDO DE NORONHA
                                        </Text>
                                    </li>
                                </ul>
                            </Section>
                            <Section className='mt-12'>
                                <Row>
                                    <Column>
                                        {' '}
                                        <Text className='text-primary m-0 w-32'>Atenciosamente, Equipe Infotravel</Text>
                                    </Column>
                                    <Column align='right'>
                                        <Img
                                            src='https://media.infotravel.com.br/image/upload/a01ff0a15728b2aacff2190128d763e1.png'
                                            width={140}
                                            height={36}
                                        />
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

export default NewLocaltrip;
