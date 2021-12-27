import { Fragment } from 'react';
import Image from 'next/image';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import {
  makeStyles,
} from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import MiniclassCard from "../components/Zeal-Miniclass-Card"
import Layout from "../components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme();
const homeStyles = makeStyles(() => ({
  homeH2: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      top: -13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      top: -15
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      top: -18
    }
  },
  h2Wrap: {
    [theme.breakpoints.down('sm')]: {
      height: 14,
      marginBottom: 13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      height: 17,
      marginBottom: 15
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      height: 22,
      marginBottom: 18
    }
  },
  p1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      fontSize: 20
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: 24
    }
  },
  p2: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      fontSize: 16
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: 20
    }
  },
  descWrap: {
    [theme.breakpoints.down('sm')]: {
      width: 300
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: 500
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: 650
    }
  },
  cardContainer: {
    [theme.breakpoints.down('sm')]: {
      height: 250,
      paddingTop: 50,
      marginBottom: 750
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      height: 400,
      paddingTop: 70,
      marginBottom: 800
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      height: 500,
      paddingTop: 100,
      marginBottom: 500
    }
  },
}));

export default function Home() {
  const classes = homeStyles();
  // const cardContent = [
  //   { cardImg: "digitalmarketing", cardTitle: "Digital Marketing", cardDesc: "Belajar digital marketing akan meningkatkan penjualan  produkmu" },
  //   { cardImg: "graphicdesign", cardTitle: "Graphic Design", cardDesc: "Tingkatkan skill desainmu dan pelajari berbagai tools desain" },
  //   { cardImg: "webdevelop", cardTitle: "Web Development", cardDesc: "Kupas tuntas berbagai basic programming agar jadi web developer andal" }
  // ]
  return (
    <Layout title="Miniclass">
      <div style={{ position: 'relative', height: '95vh' }}>
        <div style={{ width: "100%", height: '95vh', position: 'relative', zIndex: 0 }} >
          <Image src="/images/layanan/miniclass/Miniclass-Banner.png" layout="fill" />
        </div>
        <div className="top-0 start-0 position-absolute h-100 w-100" style={{ opacity: 0.5, zIndex: 1, backgroundColor: '#1F2B52' }}></div>
        <div className={`translate-middle top-50 start-50 position-absolute text-center text-white ${classes.descWrap}`} style={{ zIndex: 2 }} >
          <h1 className="text-white mb-0 heading1">Miniclass</h1>
          <div className="pt-lg-3 pt-sm-0">
            <p className="paragraf m-0 text-white">Raih karir impianmu di bidang digital teknologi dengan mengikuti program Mini Class di Zeal</p>
          </div>
        </div>
      </div>
      <div className={`bg-zeal ${classes.cardContainer}`}>
        <Container fluid className="px-lg-4 px-xl-5 px-sm-1">
          <div className="d-flex justify-content-center">
            <div style={{ backgroundColor: '#7B61FF' }} className={`d-inline-block ${classes.h2Wrap}`}>
              <h2 className={`mb-0 mb-lg-3 mb-md-2 mb-1 text-white heading2 ${classes.homeH2}`}>Yuk, Pilih Kelasmu</h2>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div style={{ backgroundColor: '#7B61FF' }} className={`d-inline-block ${classes.h2Wrap}`}>
              <h2 className={`mb-0 mb-lg-3 mb-md-2 mb-1 text-white heading2 ${classes.homeH2}`}>dan Dapatkan Free Ebook !</h2>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4 mb-sm-5 mt-xl-4 mt-sm-1">
            <div className={`text-center ${classes.descWrap}`} style={{ wordWrap: 'break-word' }}>
              <p className="paragraf m-0 text-white">Melalui Miniclass, kamu akan mendapatkan  teknik dasar berbagai kelas hingga optimasi tools yang mendukung  sebagai bekal awal karir impianmu.</p>
            </div>
          </div>
          <Row className="mb-5">
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-4 mb-lg-0">
              <MiniclassCard title="Digital Marketing" desc="Belajar digital marketing akan meningkatkan penjualan  produkmu" cardImg="digitalmarketing" to="digital-marketing" />
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="d-flex justify-content-center mb-4 mb-lg-0">
              <MiniclassCard title="Design Graphic" desc="Tingkatkan skill desainmu dan pelajari berbagai tools desain" cardImg="graphicdesign" to="graphic-design" />
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center">
              <MiniclassCard title="Web Development" desc="Kupas tuntas berbagai  basic programming agar  jadi web developer andal" cardImg="webdevelop" to="web-development" />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout >
  );
}