import React, { useEffect } from 'react';

import NavBar from './components/navbar/NavBar';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/about/About';
import Creativity from './components/creativity/creativity';
import Countdown from './components/countdown/Countdown';
import CTASection from './components/ctaSection/CTASection';
import Footer from './components/footer/FootBar';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import './styles/app.css';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		document.querySelector('html').style.scrollBehavior = 'smooth';
		setTimeout(() => {
			setOpen(true);
		}, 15000);
	}, []);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className="App">
			<div className="scroll-up-btn">
				<div className="fas fa-angle-up"></div>
			</div>

			<NavBar />
			{/* <!-- home section start --> */}
			<HeroSection />
			{/* <!-- about section start --> */}
			<About />
			{/* <!-- creativity section start --> */}
			<Creativity />
			{/* <!-- Countdown section start --> */}
			<Countdown handleClickOpen={handleClickOpen} />
			{/* <!-- CTA section start --> */}
			<CTASection handleClickOpen={handleClickOpen} />

			<Footer />

			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				maxWidth="md"
				fullWidth
				aria-describedby="alert-dialog-slide-description"
			>
				<div style={{ background: '#b2ac88' }}>
					<DialogTitle sx={{ fontWeight: 'bold', fontSize: '40px', pb: 0 }}>Flat 15% OFF</DialogTitle>
					<DialogContent>
						<div>Enter your details and win a coupon worth 15% Off</div>
						<div className="dilogForm">
							<TextField
								id="filled-basic"
								placeholder="Enter your Phone"
								label="Enter your Phone"
								fullWidth
								variant="filled"
								margin="normal"
							/>
							<TextField
								id="filled-basic"
								label="Enter your Email"
								placeholder="Enter your Email"
								fullWidth
								variant="filled"
								margin="normal"
							/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button
							variant="contained"
							fullWidth
							color="success"
							style={{
								width: '60%',
								margin: 'auto',
								marginBottom: '10px',
							}}
						>
							Show me Coupon
						</Button>
					</DialogActions>
				</div>
			</Dialog>
		</div>
	);
}

export default App;
