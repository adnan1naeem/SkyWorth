import * as React from 'react';
import { Grid, Typography, Card, CardContent, Avatar, Stack, Container, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { motion } from 'framer-motion';

const sections = [
    {
        title: 'Address',
        description: 'Block B, No.13, Jalan Pelukis U1/46, Temasya Industrial Park Seksyen U1, 40150 Shah Alam, Selangor Darul Ehsan, Malaysia.',
        icon: <BusinessIcon sx={{ height: 45, width: 45 }} />,
    },
    {
        title: 'Contact Number',
        description: 'Call our HQ at 1 800 888 123 (Toll Free)',
        icon: <PhoneIcon sx={{ height: 45, width: 45 }} />,
    },
    {
        title: 'Email Address',
        description: 'Email our team at service@skyworth.com.my',
        icon: <MailOutlineIcon sx={{ height: 45, width: 45 }} />,
    },
];

const iconVariants = {
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { duration: 0.5 } },
};

const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function ContactBar({ title, description, icon }) {
    return (
        <Grid item xs={6} sm={6} md={6} lg={3} sx={{ bgcolor: 'transparent', border: 'none' }}>
            <Card sx={{ bgcolor: 'transparent', boxShadow: 'none', border: 'none' }}>
                <CardContent sx={{ bgcolor: 'transparent', padding: 2 }}>
                    <Stack direction="row" spacing={1}>
                        <motion.div variants={iconVariants} initial="hidden" whileInView="visible">
                            <Avatar
                                sx={{
                                    width: 48,
                                    height: 48,
                                    bgcolor: 'transparent',
                                    color: '#0069CB',
                                }}
                            >
                                {icon}
                            </Avatar>
                        </motion.div>
                        <Box>
                            <motion.div variants={textVariants} initial="hidden" whileInView="visible">
                                <Typography
                                    fontSize={{ xs: 16, lg: 16 }}
                                    fontFamily={"Kanit"}
                                    fontWeight={"400"}
                                    color={"#7A7B7C"}
                                    component="div"
                                    gutterBottom
                                >
                                    {title}
                                </Typography>
                            </motion.div>
                            <motion.div variants={textVariants} initial="hidden" whileInView="visible">
                                <Typography fontFamily={"Kanit"} lineHeight={1.8} fontWeight={400} color={"#050505"} fontSize={12}>
                                    {description}
                                </Typography>
                            </motion.div>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
}

function ContactRow() {
    return (
        <div style={{ backgroundColor: "#F4F7F9" }}>
            <Container maxWidth="xl" sx={{ bgcolor: '#F4F7F9', py: 6 }}>
                <Grid
                    container
                    spacing={3}
                    justifyContent="space-between"
                >
                    {sections.map((section, index) => (
                        <ContactBar key={index} {...section} />
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default ContactRow;
