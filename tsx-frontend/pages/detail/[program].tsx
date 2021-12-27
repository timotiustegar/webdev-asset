import { Fragment } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {
    Row,
    Col,
    Container,
    Button
} from 'react-bootstrap';
import {
    Grid,
    Hidden
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
import MaterialClass from "../../components/Zeal-Miniclass-Material"
import Layout from '../../components/Layout';
const theme = createTheme();
const detailStyles = makeStyles(() => ({
    bannerWrap: {
        [theme.breakpoints.down('sm')]: {
            padding: "40px 0 30px 0"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: "70px 0"
        },
        [theme.breakpoints.between('md', 'xl')]: {
            padding: "100px 0"
        }
    },
    imgWrap: {
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0
        },
        [theme.breakpoints.between('sm', 'md')]: {
            paddingRight: 30
        },
        [theme.breakpoints.between('md', 'xl')]: {
            paddingRight: 100
        }
    },
    bannerImg: {
        [theme.breakpoints.down('sm')]: {
            height: 160
        },
        [theme.breakpoints.up('sm')]: {
            height: 250
        }
    },
    descWrap: {
        [theme.breakpoints.down('sm')]: {
            width: 200
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 350
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 450
        }
    },
    circleLeft: {
        [theme.breakpoints.down('sm')]: {
            height: 100
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            height: 150
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 200
        }
    },
    circleRight: {
        [theme.breakpoints.down('sm')]: {
            height: 180,
            bottom: 50
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            height: 250,
            bottom: 80
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            height: 300,
            bottom: 100
        }
    },
    downloadWrap: {
        [theme.breakpoints.down('sm')]: {
            paddingBottom: 90
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            paddingBottom: 120
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            paddingBottom: 150
        }
    },
    benefitImg: {
        [theme.breakpoints.down('sm')]: {
            width: 90,
            height: 90
        },
        [theme.breakpoints.up('sm')]: {
            width: 120,
            height: 120
        }
    },
}));

export default function DetailClass() {
    const classes = detailStyles();
    const router = useRouter();
    const program: any = router.query.program;
    const benefits = [
        { benefitImg: 'benefit1', benefit: "Dapatkan Akses Pembelajaran Gratis" },
        { benefitImg: 'benefit2', benefit: "Tetap Update dengan Teknologi Terkini" },
        { benefitImg: 'benefit3', benefit: "Belajar dari Mentor Ahli di Bidangnya" },
        { benefitImg: 'benefit4', benefit: "Belajar Melalui Real Project" }
    ]
    const programList = [
        { name: "graphic-design", title: "Graphic Design", desc: "Tingkatkan skill design kamu dengan mempelajari fundamental graphic design dan tutorial penggunaan tools design", img: "graphicdesign", material: [{ material1: "Fundamental of Graphic Design", material2: "Adobe Illustrator" }, { material1: "Adobe Photoshop", material2: "Bonus Tips" }], href: "https://forms.gle/h7Z3TkLK1k3LDs9R6" },
        { name: "digital-marketing", title: "Digital Marketing", desc: "Tingkatkan penjualan produk yang kamu punya dengan mempelajari fundamental digital marketing", img: "digitalmarketing", material: [{ material1: "Branding", material2: "Copywriting" }, { material1: "Ads", material2: "Google & SEO" }, { material1: "Content Planning", material2: "E-Commerce" }], href: "https://forms.gle/gnFCcJRhpfjqAezN8" },
        { name: "web-development", title: "Web Development", desc: "Jadilah developer andal  dengan mempelajari fundamental programming melalui Mini Class di Zeal", img: "webdevelop", material: [{ material1: "Roadmap", material2: "HTML" }, { material1: "Bootstrap", material2: "CSS/SCSS" }, { material1: "Javascript", material2: "Github" }], href: "https://forms.gle/W23jwoXnxXTYRPzP8" }
    ]
    return (
        <Layout title="Miniclass">
            {programList.filter((item) => {
                if (program === item.name) {
                    return item;
                }
            }).map((item, index) =>
                <Fragment>
                    <div style={{ width: "100%", overflow: 'hidden' }} className="bg-zeal">
                        <Row className={classes.bannerWrap}>
                            <Col className={`d-flex justify-content-end align-items-center ${classes.imgWrap}`} xs={4} sm={4} md={4} lg={6} xl={6}>
                                <Hidden mdUp>
                                    <div className={classes.bannerImg} style={{ position: 'relative' }}>
                                        <Image alt="bannerMobileImg" src={`/images/layanan/miniclass/${item.img}-mobile.png`} layout="fill" />
                                    </div>
                                </Hidden>
                                <Hidden mdDown>
                                    <Image alt="bannerImg" src={`/images/layanan/miniclass/${item.img}.png`} width={280} height={280} />
                                </Hidden>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={6} xl={6}>
                                <h1 className="text-white mb-0 heading1">{item.title}</h1>
                                <div className={classes.descWrap}>
                                    <p className="paragraf m-0 mb-lg-5 mb-md-5 mb-sm-4 mb-2 text-white">{item.desc}</p>
                                    <Link href={item.href}>
                                        <Button className="px-4 secondaryButton button">Download Free Ebook</Button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div style={{ width: 570, marginTop: 100 }} className="text-center">
                            <h2 className="mb-0 primaryColor heading2">Mengapa Kamu Harus Belajar {item.title} di Zeal?</h2>
                        </div>
                    </div>
                    <Container fluid style={{ marginTop: 70 }}>
                        <Row>
                            {benefits.map((item, index) =>
                                <Col key={index} xs={6} sm={6} md={6} lg={3} xl={3} className="d-flex justify-content-center text-center mb-lg-0 mb-md-4 mb-sm-4 mb-4">
                                    <div style={{ width: 220 }}>
                                        <div className="w-100 d-flex justify-content-center">
                                            <div className={`rounded-circle position-relative overflow-hidden  ${classes.benefitImg}`}>
                                                <Image alt="benefitImg" src={`/images/layanan/miniclass/${item.benefitImg}.png`} layout="fill" />
                                            </div>
                                        </div>
                                        <p className="paragraf m-0 primaryColor mt-3">{item.benefit}</p>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Container>
                    <div style={{ width: '100%', overflow: 'hidden', backgroundColor: "#E4E7EF", marginTop: 150, position: 'relative' }}>
                        <div className={classes.circleLeft} style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
                            <Image src="/images/layanan/miniclass/circle-left.png" alt="CircleLeft" layout="fill" />
                        </div>
                        <Grid container className="position-relative" style={{ zIndex: 1000 }}>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="px-3">
                                <div className="d-flex justify-content-center w-100 pt-5">
                                    <div className="text-center" style={{ width: 470 }}>
                                        <h2 className="mb-0 primaryColor heading2">Apa yang Akan Kamu Pelajari?</h2>
                                        <p className="paragraf m-0 primaryColor mt-2">Banyak ilmu yang bakal kamu dapat melalui Free Ebook nih!</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid container justifyContent="center" columnSpacing={{ xs: 1, sm: 3, md: 3, lg: 3, xl: 3 }}>
                                {item.material.map((item, index) =>
                                    <Grid item key={index} className="d-inline-block pt-5">
                                        <MaterialClass material={item.material1} />
                                        <MaterialClass material={item.material2} />
                                    </Grid>
                                )}
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.downloadWrap}>
                                <div className="d-flex justify-content-center w-100 px-5" style={{ paddingTop: 100 }}>
                                    <div className="text-center" style={{ width: 470 }}>
                                        <h2 className="mb-5 primaryColor heading2">Yuk Download Free Ebook {item.title} Sekarang!</h2>
                                        <Link href={item.href}>
                                            <Button className="px-4 primaryButton button">Download Free Ebook</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <div className={classes.circleRight} style={{ position: 'absolute', right: 0, zIndex: 1 }}>
                            <Image src="/images/layanan/miniclass/circle-right.png" alt="CircleRight" layout="fill" />
                        </div>
                    </div>
                </Fragment>
            )}
        </Layout>
    )
}