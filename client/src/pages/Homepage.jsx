// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Grid, Box, Button } from '@mui/material';
// import styled from 'styled-components';
// import Students from "../assets/students.svg";
// import { LightPurpleButton } from '../components/buttonStyles';

// const Homepage = () => {
//     return (
//         <StyledContainer>
//             <Grid container spacing={0}>
//                 <Grid item xs={12} md={6}>
//                     <img src={Students} alt="students" style={{ width: '100%' }} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <StyledPaper>
//                         <StyledTitle>
//                             Welcome to
//                             <br />
//                             School Management
//                             <br />
//                             System
//                         </StyledTitle>
//                         <StyledText>
//                             Streamline school management, class organization, and add students and faculty.
//                             Seamlessly track attendance, assess performance, and provide feedback.
//                             Access records, view marks, and communicate effortlessly.
//                         </StyledText>
//                         <StyledBox>
//                             <StyledLink to="/choose">
//                                 <LightPurpleButton variant="contained" fullWidth>
//                                     Login
//                                 </LightPurpleButton>
//                             </StyledLink>
//                             <StyledLink to="/chooseasguest">
//                                 <Button variant="outlined" fullWidth
//                                     sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
//                                 >
//                                     Login as Guest
//                                 </Button>
//                             </StyledLink>
//                             <StyledText>
//                                 Don't have an account?{' '}
//                                 <Link to="/Adminregister" style={{ color: "#550080" }}>
//                                     Sign up
//                                 </Link>
//                             </StyledText>
//                         </StyledBox>
//                     </StyledPaper>
//                 </Grid>
//             </Grid>
//         </StyledContainer>
//     );
// };

// export default Homepage;

// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const StyledPaper = styled.div`
//   padding: 24px;
//   min-height: 100vh;
// `;

// const StyledBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;
//   padding: 24px;
// `;

// const StyledTitle = styled.h1`
//   font-size: 3rem;
//   color: #252525;
//   font-weight: bold;
//   padding-top: 0;
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledText = styled.p`
//   margin-top: 30px;
//   margin-bottom: 30px;
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button, Typography, Card, CardContent, AppBar, Toolbar, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

// Assumed icon imports - you'll need to add these
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Homepage = () => {
    return (
        <div>
            {/* Header/Navigation */}
            <StyledAppBar position="sticky">
                <Container>
                    <Toolbar disableGutters>
                        <StyledLogoContainer>
                            <SchoolIcon sx={{ mr: 1 }} />
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                                EduManage
                            </Typography>
                        </StyledLogoContainer>
                        
                        <StyledNavLinks>
                            <StyledNavLink href="#features">Features</StyledNavLink>
                            <StyledNavLink href="#benefits">Benefits</StyledNavLink>
                            <StyledNavLink href="#testimonials">Testimonials</StyledNavLink>
                            <StyledNavLink href="#contact">Contact</StyledNavLink>
                        </StyledNavLinks>
                        
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large" color="inherit">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </StyledAppBar>

            {/* Hero Section */}
            <HeroSection>
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <HeroPaper>
                                <StyledTitle>
                                    Simplify School
                                    <br />
                                    Management with
                                    <br />
                                    <GradientText>EduManage</GradientText>
                                </StyledTitle>
                                <StyledText>
                                    An all-in-one platform to streamline school administration, empower teachers,
                                    and enhance the learning experience for students and parents.
                                </StyledText>
                                <ButtonContainer>
                                    <StyledLink to="/choose">
                                        <LightPurpleButton variant="contained" fullWidth>
                                            Login
                                        </LightPurpleButton>
                                    </StyledLink>
                                    <StyledLink to="/chooseasguest">
                                        <Button variant="outlined" fullWidth
                                            sx={{ color: "#7f56da", borderColor: "#7f56da" }}
                                        >
                                            Login as Guest
                                        </Button>
                                    </StyledLink>
                                </ButtonContainer>
                                <SignupText>
                                    Don't have an account?{' '}
                                    <Link to="/Adminregister" style={{ color: "#550080", fontWeight: 'bold' }}>
                                        Sign up
                                    </Link>
                                </SignupText>
                            </HeroPaper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <img src={Students} alt="students" style={{ width: '100%', position: 'relative', zIndex: 2 }} />
                                <BackgroundCircle />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </HeroSection>

            {/* Features Section */}
            <SectionContainer id="features">
                <Container>
                    <SectionHeading>
                        <Typography variant="h3" component="h2" align="center" gutterBottom>
                            Powerful Features
                        </Typography>
                        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
                            Everything you need to manage your educational institution
                        </Typography>
                    </SectionHeading>

                    <Grid container spacing={4}>
                        {[
                            { 
                                icon: <SchoolIcon fontSize="large" />, 
                                title: "Student Management", 
                                description: "Add, update, and track student profiles, academic history, and performance metrics." 
                            },
                            { 
                                icon: <PeopleIcon fontSize="large" />, 
                                title: "Faculty Portal", 
                                description: "Manage teacher profiles, assignments, schedules, and professional development." 
                            },
                            { 
                                icon: <AssignmentIcon fontSize="large" />, 
                                title: "Assessment Tools", 
                                description: "Create and grade assignments, conduct examinations, and generate report cards." 
                            },
                            { 
                                icon: <EventNoteIcon fontSize="large" />, 
                                title: "Attendance Tracking", 
                                description: "Monitor student and staff attendance with automated reporting and notifications." 
                            }
                        ].map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <FeatureCard>
                                    <IconCircle>
                                        {feature.icon}
                                    </IconCircle>
                                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mt: 2 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                        {feature.description}
                                    </Typography>
                                </FeatureCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </SectionContainer>

            {/* Benefits Section */}
            <SectionContainer id="benefits" sx={{ backgroundColor: '#f8f9fa' }}>
                <Container>
                    <SectionHeading>
                        <Typography variant="h3" component="h2" align="center" gutterBottom>
                            Why Choose EduManage
                        </Typography>
                        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
                            Transform your educational institution with our comprehensive solution
                        </Typography>
                    </SectionHeading>

                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <img 
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" 
                                alt="School benefits" 
                                style={{ width: '100%', borderRadius: '16px', boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }} 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <List>
                                {[
                                    { 
                                        text: "Increase administrative efficiency by up to 70%" 
                                    },
                                    { 
                                        text: "Reduce paperwork and manual data entry by 90%" 
                                    },
                                    { 
                                        text: "Improve parent-teacher communication and engagement" 
                                    },
                                    { 
                                        text: "Access real-time data and reports for informed decision making" 
                                    },
                                    { 
                                        text: "Ensure data security and compliance with educational standards" 
                                    }
                                ].map((benefit, index) => (
                                    <ListItem key={index} sx={{ py: 1 }}>
                                        <ListItemIcon>
                                            <CheckCircleIcon sx={{ color: '#7f56da' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={benefit.text} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box sx={{ mt: 4 }}>
                                <StyledLink to="/chooseasguest">
                                    <LightPurpleButton variant="contained">
                                        Try Demo
                                    </LightPurpleButton>
                                </StyledLink>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </SectionContainer>

            {/* Testimonials Section */}
            <SectionContainer id="testimonials">
                <Container>
                    <SectionHeading>
                        <Typography variant="h3" component="h2" align="center" gutterBottom>
                            What Clients Say
                        </Typography>
                        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
                            Trusted by educational institutions worldwide
                        </Typography>
                    </SectionHeading>

                    <Grid container spacing={4}>
                        {[
                            { 
                                name: "Dr. Sarah Johnson", 
                                role: "Principal, Washington High School",
                                quote: "EduManage has transformed our administrative processes. What used to take days now takes minutes, allowing our staff to focus on what truly matters - education." 
                            },
                            { 
                                name: "Mark Thompson", 
                                role: "IT Director, Oakridge Academy",
                                quote: "The implementation was seamless, and the support team has been exceptional. Our teachers quickly adapted to the platform and now couldn't imagine working without it." 
                            },
                            { 
                                name: "Lisa Chen", 
                                role: "Department Head, Riverdale College",
                                quote: "The comprehensive reporting features have given us insights we never had before. We can now make data-driven decisions that benefit our students and institution." 
                            }
                        ].map((testimonial, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <TestimonialCard>
                                    <CardContent>
                                        <QuoteMark>"</QuoteMark>
                                        <Typography variant="body1" paragraph>
                                            {testimonial.quote}
                                        </Typography>
                                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {testimonial.role}
                                        </Typography>
                                    </CardContent>
                                </TestimonialCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </SectionContainer>

            {/* Call to Action */}
            <CtaSection>
                <Container>
                    <CtaBox>
                        <Grid container alignItems="center" spacing={4}>
                            <Grid item xs={12} md={8}>
                                <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                                    Ready to transform your school management?
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: 'white', mb: 3 }}>
                                    Join thousands of educational institutions already using EduManage.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                                <StyledLink to="/Adminregister">
                                    <Button 
                                        variant="contained" 
                                        sx={{ 
                                            bgcolor: 'white', 
                                            color: '#7f56da', 
                                            '&:hover': { bgcolor: '#f0f0f0' },
                                            py: 1.5,
                                            px: 4,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Get Started Free
                                    </Button>
                                </StyledLink>
                            </Grid>
                        </Grid>
                    </CtaBox>
                </Container>
            </CtaSection>

            {/* Footer */}
            <Footer id="contact">
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <SchoolIcon sx={{ mr: 1, fontSize: 30 }} />
                                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                    EduManage
                                </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                The complete solution for educational institutions looking to streamline operations and enhance learning experiences.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton size="small" sx={{ color: '#718096' }}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton size="small" sx={{ color: '#718096' }}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton size="small" sx={{ color: '#718096' }}>
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton size="small" sx={{ color: '#718096' }}>
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Product
                            </Typography>
                            <FooterLink href="#">Features</FooterLink>
                            <FooterLink href="#">Pricing</FooterLink>
                            <FooterLink href="#">Integrations</FooterLink>
                            <FooterLink href="#">Updates</FooterLink>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Resources
                            </Typography>
                            <FooterLink href="#">Documentation</FooterLink>
                            <FooterLink href="#">Tutorials</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="#">Support</FooterLink>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Company
                            </Typography>
                            <FooterLink href="#">About</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Partners</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Legal
                            </Typography>
                            <FooterLink href="#">Privacy</FooterLink>
                            <FooterLink href="#">Terms</FooterLink>
                            <FooterLink href="#">Security</FooterLink>
                            <FooterLink href="#">Compliance</FooterLink>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
                        <Typography variant="body2" color="text.secondary">
                            © {new Date().getFullYear()} EduManage. All rights reserved.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, sm: 0 } }}>
                            <Typography variant="body2" color="text.secondary">
                                Privacy Policy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Terms of Service
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Footer>
        </div>
    );
};

export default Homepage;

// Styled Components
const StyledAppBar = styled(AppBar)`
    background-color: white;
    color: #333;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const StyledLogoContainer = styled(Box)`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

const StyledNavLinks = styled(Box)`
    display: flex;
    gap: 24px;
    
    @media (max-width: 900px) {
        display: none;
    }
`;

const StyledNavLink = styled.a`
    color: #555;
    text-decoration: none;
    font-weight: 500;
    padding: 8px 0;
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #7f56da;
        transition: width 0.3s ease;
    }
    
    &:hover {
        color: #7f56da;
        
        &:after {
            width: 100%;
        }
    }
`;

const HeroSection = styled.section`
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding: 48px 0;
    background-color: #fafafa;
    position: relative;
    overflow: hidden;
`;

const HeroPaper = styled.div`
    padding: 24px;
    position: relative;
    z-index: 2;
`;

const BackgroundCircle = styled.div`
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(127, 86, 218, 0.1) 0%, rgba(85, 0, 128, 0.1) 100%);
    top: -200px;
    right: -200px;
    z-index: 1;
`;

const StyledTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 24px;
    color: #252525;
    
    @media (max-width: 900px) {
        font-size: 2.5rem;
    }
`;

const GradientText = styled.span`
    background: linear-gradient(90deg, #7f56da 0%, #550080 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const StyledText = styled.p`
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 32px;
    max-width: 600px;
`;

const ButtonContainer = styled(Box)`
    display: flex;
    gap: 16px;
    width: 100%;
    max-width: 400px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
`;

const SignupText = styled.p`
    margin-top: 24px;
    color: #666;
    font-size: 0.95rem;
`;

const SectionContainer = styled.section`
    padding: 80px 0;
`;

const SectionHeading = styled(Box)`
    max-width: 700px;
    margin: 0 auto 40px;
`;

const FeatureCard = styled(Card)`
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
`;

const IconCircle = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(127, 86, 218, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    
    svg {
        color: #7f56da;
    }
`;

const TestimonialCard = styled(Card)`
    height: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #7f56da 0%, #550080 100%);
    }
`;

const QuoteMark = styled.div`
    font-size: 4rem;
    color: rgba(127, 86, 218, 0.2);
    font-family: Georgia, serif;
    line-height: 1;
    margin-bottom: 16px;
`;

const CtaSection = styled.section`
    padding: 40px 0;
    background-color: #f8f9fa;
`;

const CtaBox = styled(Box)`
    background: linear-gradient(90deg, #7f56da 0%, #550080 100%);
    border-radius: 16px;
    padding: 48px;
    box-shadow: 0 10px 30px rgba(85, 0, 128, 0.2);
`;

const Footer = styled.footer`
    background-color: #f8f9fa;
    padding: 64px 0 32px;
`;

const FooterLink = styled.a`
    display: block;
    color: #718096;
    text-decoration: none;
    margin-bottom: 12px;
    transition: color 0.2s;
    
    &:hover {
        color: #7f56da;
    }
`;

const Divider = styled.hr`
    border: 0;
    height: 1px;
    background-color: #e2e8f0;
    margin: 32px 0;
`;