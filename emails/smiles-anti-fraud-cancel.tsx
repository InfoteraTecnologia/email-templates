import * as React from 'react';
import {
    Container,
    Html,
    Head,
    Font,
    Body,
    Tailwind,
    Img,
    Heading,
    Text,
    Button,
    Section,
    Column,
    Row,
    Link,
} from '@react-email/components';

const SmilesAntiFraudCancel = () => {
    const fontBold = {
        fontFamily: 'Nunito',
        fontWeight: 800,
    };
    const smilesUrl = 'https://www.smilesviagens.com.br/';
    return (
        <Tailwind
            config={{
                theme: {
                    extend: {
                        colors: {
                            background: '#FFF',
                            accent: '#3E3D3D',
                            primary: '#FF7020',
                            gray: '#DBE5EA',
                            mediumGray: '#7C7C7C',
                            green: '#E6F1EB',
                        },
                    },
                },
            }}>
            <Html lang='pt-BR'>
                <Head>
                    <meta name='color-scheme' content='light dark' />
                    <meta name='supported-color-schemes' content='light dark' />
                    <Font
                        fontFamily='Nunito'
                        fallbackFontFamily={['Verdana', 'Arial', 'sans-serif']}
                        webFont={{
                            url: 'https://fonts.gstatic.com/s/nunito/v26/XRXV3I6Li01BKofINeaB.woff2',
                            format: 'woff2',
                        }}
                    />
                </Head>
                <Body className='text-primary m-0 h-fit w-fit text-base'>
                    <Container className='bg-background h-fit w-fit min-w-[595px] px-4 py-1 pb-10'>
                        <Link className='block w-24' href={smilesUrl}>
                            <Img
                                width={110}
                                height={62}
                                src='https://media.infotravel.com.br/image/upload/e0d4f862907dd17d6e7611a9a1f31393.png'></Img>
                        </Link>

                        <Container className='bg-gray border-gray mt-4 h-0.5 w-11/12 border-2'></Container>
                        <Container className='pl-4 pt-6'>
                            <Img
                                width={140}
                                height={140}
                                src='https://media.infotravel.com.br/image/upload/cb31fd848002d0249d0c2924ae102b38.png'></Img>
                        </Container>
                        <Container className='px-3 pt-2'>
                            <Heading as='h1' className='text-accent mb-2 text-3xl/10 font-medium tracking-wide'>
                                Ocorreu um erro e não foi possível confirmar sua reserva.
                            </Heading>
                            <Text className='text-accent m-0 text-base font-medium tracking-normal'>
                                Infelizmente, não foi possível confirmar sua reserva{' '}
                                <b style={fontBold}>[númeroDaReserva]</b>. Caso a reserva já tenha sido cobrada, não se
                                preocupe, os valores serão reembolsados.
                            </Text>
                            <Text className='text-accent text-base font-medium tracking-normal'>
                                Se preferir, faça uma nova busca para montar <br /> um novo pacote:
                            </Text>
                            <Button
                                href={smilesUrl}
                                className='bg-primary rounded-full px-6 py-3 font-medium text-neutral-900'>
                                Fazer nova busca
                            </Button>
                        </Container>
                        <Container className='border-gray mt-6 h-px w-11/12 border-2 bg-slate-100'></Container>
                        <Container className='border-gray mt-7 h-px w-11/12 border-2 bg-slate-100'></Container>
                        <Section>
                            <Row className='pt-2'>
                                <Column className='w-10 pl-5'>
                                    <Img
                                        width={32}
                                        height={32}
                                        src='https://media.infotravel.com.br/image/upload/3a99fa0b2da26cce6339344cf387c651.png'></Img>
                                </Column>
                                <Column>
                                    <Text className='text-mediumGray h-0 text-xs'>Fale conosco</Text>
                                    <Text className='text-mediumGray h-0 text-xs'>
                                        Suporte de vendas: <b style={fontBold}>0800 006 8770</b>
                                    </Text>
                                    <Text className='text-mediumGray h-0 text-xs'>
                                        Pós vendas: <b style={fontBold}>0800 006 8788</b>
                                    </Text>
                                </Column>
                                <Column className='w-[80px]'>
                                <Link href={smilesUrl} className='block'>
                                    <Img
                                        width={80}
                                        height={40}
                                        src='https://media.infotravel.com.br/image/upload/fad1aa70017352d4f456da1463d7a55b.png'></Img>
                                </Link>
                                </Column>
                            </Row>
                        </Section>
                        <Row className='pr-4'>
                            <Column className='pl-5'>
                                <Link
                                    className='bg-green text-accent mt-3 inline-block w-44 rounded-sm px-1 py-0.5 shadow-md'
                                    href='https://api.whatsapp.com/send?phone=5511993680450'>
                                    <Img
                                        width={20}
                                        height={20}
                                        src='https://media.infotravel.com.br/image/upload/3f72771b9386fa1b5d5407900c36b750.png'
                                        className='mr-3 inline align-middle'></Img>
                                    <span className='bg-green text-accent w-36 align-middle text-xs'>
                                        Contato pelo Whatsapp
                                    </span>
                                </Link>
                            </Column>
                            <Column className='inline-block whitespace-nowrap'>
                                <Column>
                                    <Link
                                        className='mr-4 block w-2 align-middle'
                                        href='https://www.instagram.com/smilesviagens.oficial/?hl=en'>
                                        <Img
                                            width={24}
                                            height={24}
                                            src='https://media.infotravel.com.br/image/upload/26e311c2def1db87efbab165ef724639.png'></Img>
                                    </Link>
                                </Column>
                                <Column>
                                    <Link
                                        className='block w-2 align-middle'
                                        href='https://www.linkedin.com/company/smiles-viagens/?originalSubdomain=br'>
                                        <Img
                                            width={24}
                                            height={24}
                                            src='https://media.infotravel.com.br/image/upload/662b0b279b9a308b124afbd014da2087.png'></Img>
                                    </Link>
                                </Column>
                            </Column>
                        </Row>
                    </Container>
                </Body>
            </Html>
        </Tailwind>
    );
};

export default SmilesAntiFraudCancel;
