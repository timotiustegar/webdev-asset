import Image from 'next/image'
import {
    Row,
    Col,
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import {
    Hidden,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {
    makeStyles,
} from '@mui/styles';
const theme = createTheme();
const footerStyles = makeStyles(() => ({
    footerIcon: {
        [theme.breakpoints.down('sm')]: {
            height: 22,
            width: 22
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: 30,
            width: 30
        },
        [theme.breakpoints.between('md', 'xl')]: {
            height: 35,
            width: 35
        }
    },
    zealIcon: {
        [theme.breakpoints.down('sm')]: {
            width: 35
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 45
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 60
        }
    },
    copyright: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 10
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: 15
        },
        [theme.breakpoints.between('md', 'xl')]: {
            fontSize: 18
        }
    },
    copyrightWrap: {
        [theme.breakpoints.down('sm')]: {
            width: 200
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 300
        },
        [theme.breakpoints.between('md', 'xl')]: {
            width: 400
        }
    },
}));
export default function Footer() {
    const classes = footerStyles()
    return (
        <div className="position-relative">
            <div style={{ display: "block", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: 0 }}>
                <div style={{ display: "block", boxSizing: "border-box", paddingTop: "26.283367556468175%" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "fill" }}>
                        <Image alt="Footer" src="/images/footer.png" layout="fill" />
                    </div>
                </div>
            </div>
            <div className={`translate-middle top-0 start-50 position-absolute ${classes.zealIcon}`}>
                <Image alt="Zeal Icon" src="/images/rect logo after compress.png" layout="fill"  />
            </div>
            <div className="translate-middle top-50 start-50 position-absolute">
                <div>
                    <Row className="d-flex justify-content-center mb-3 mb-md-4 mb-xl-5">
                        <Col xs={3} sm={2} md={2} className={`position-relative ${classes.footerIcon}`}>
                            <Image alt="iconMap" src="/images/gmaps-white" layout="fill" />
                        </Col>
                        <Col xs={3} sm={2} md={2} className={`position-relative ${classes.footerIcon}`}>
                            <Image alt="iconEmail" src="/images/email-white" layout="fill" />
                        </Col>
                        <Col xs={3} sm={2} md={2} className={`position-relative ${classes.footerIcon}`}>
                            <Image alt="iconInsta" src="/images/ig-white" layout="fill" />
                        </Col>
                        <Col xs={3} sm={2} md={2} className={`position-relative ${classes.footerIcon}`}>
                            <Image alt="iconWa" src="/images/wa-white" layout="fill" />
                        </Col>
                    </Row>
                    <Hidden smDown>
                        <Hidden mdUp>
                            <InputGroup size="sm">
                                <FormControl
                                    placeholder="Subscribe"
                                />
                                <Button style={{ backgroundColor: '#3935EB', borderColor: '#3935EB' }}>
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </Hidden>
                        <Hidden mdDown>
                            <InputGroup>
                                <FormControl
                                    placeholder="Subscribe"
                                />
                                <Button style={{ backgroundColor: '#3935EB', borderColor: '#3935EB' }}>
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </Hidden>
                    </Hidden>
                </div>
            </div>
            <div className={`translate-middle bottom-0 start-50 position-absolute text-white text-center ${classes.copyrightWrap}`}>
                <p className={`m-0 ${classes.copyright}`}>© 2021 Zeal Indonesia. All rights reserved.</p>
            </div>
        </div>
    )
}