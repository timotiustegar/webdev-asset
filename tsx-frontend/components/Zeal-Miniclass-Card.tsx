import React from 'react';
import Link from "next/link";
import Image from "next/image"
import {
    Card,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const cardStyles = makeStyles(() => ({
    card: {
        [theme.breakpoints.down('sm')]: {
            width: 370,
            padding: 18,
            borderRadius: 50
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 550,
            padding: 30,
            borderRadius: 80
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 350,
            padding: 35,
            borderRadius: 80
        },
    },
    cardImg: {
        [theme.breakpoints.down('sm')]: {
            width: 100,
            height: 100
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 170,
            height: 170
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 170,
            height: 170
        },
    },
    button: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.between('md', 'xl')]: {
            fontSize: 22,
        },
    },
}));
type Props = {
    desc?: string;
    title?: string;
    cardImg?: string;
    to?: string;
};
export default function ClassCard({ desc, title, cardImg, to }: Props) {
    const classes = cardStyles();
    return (
        <Card className={classes.card} style={{ boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.25)' }}>
            <Row>
                <Col xs={5} sm={5} md={5} lg={12} xl={12} className="d-flex justify-content-center align-items-center mb-lg-3 mb-md-0">
                    <div className={`rounded-circle position-relative overflow-hidden ${classes.cardImg}`}>
                        <Image alt="CardImg" src={(`/images/layanan/miniclass/${cardImg}.png`)} layout="fill" objectFit="cover" />
                    </div>
                </Col>
                <Col xs={7} sm={7} md={7} lg={12} xl={12}>
                    <Card.Body className="text-md-start primaryColor mt-3 p-0 text-lg-center">
                        <h2 className="mb-0 mb-lg-3 mb-md-2 mb-1 heading2">{title}</h2>
                        <Card.Text>
                            <p className="paragraf m-0">{desc}</p>
                        </Card.Text>
                        <Link href={`/detail/` + to}>
                            <Button className="primaryButton button mt-lg-4 mt-md-3 mt-1 mb-lg-3 mb-md-0 px-3">Gabung Sekarang</Button>
                        </Link>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}