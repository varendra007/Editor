import * as React from 'react';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import DropzoneComponent from '../Dropzone';
const useStyles = makeStyles({
	navBtns: {
		cursor: 'pointer',
		paddingTop: '3px',
		transition: 'all 300ms ease-in-out 0s',
		textTransform: 'uppercase',
		opacity: '0.6',
	},
	activeNavBtns: {
		color: 'white',
		cursor: 'pointer',
		paddingTop: '3px',
		transition: 'all 300ms ease-in-out 0s',
		textTransform: 'uppercase',
		opacity: '1',
		borderTop: '2px solid #5a4cdb',
	},
});
export function YourMedia(props) {
	const classes = useStyles();
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const handleCurrent = (ind) => {
		setCurrentIndex(ind);
	};
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', padding: '15px 5px' }}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					fontSize: '12px',
					color: 'grey',
					fontWeight: '500',
					margin: '0 0 15px',
					transition: 'all 500ms ease-in-out 0s',
				}}
			>
				<p
					className={
						currentIndex === 0 ? classes.activeNavBtns : classes.navBtns
					}
					onClick={handleCurrent.bind(this, 0)}
				>
					ALL
				</p>
				<p
					className={
						currentIndex === 1 ? classes.activeNavBtns : classes.navBtns
					}
					onClick={handleCurrent.bind(this, 1)}
				>
					TEXT
				</p>
				<p
					className={
						currentIndex === 2 ? classes.activeNavBtns : classes.navBtns
					}
					onClick={handleCurrent.bind(this, 2)}
				>
					AUDIO
				</p>
				<p
					className={
						currentIndex === 3 ? classes.activeNavBtns : classes.navBtns
					}
					onClick={handleCurrent.bind(this, 3)}
				>
					IMAGE
				</p>
			</div>
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				<Grid item xs={12}>
					<Grid container justifyContent="center" spacing={2}>
						{[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
							<Grid key={value} item>
								<img
									src="./images/Rectangle.png"
									alt="img"
									style={{ width: '130px' }}
								/>
								<p
									style={{
										margin: 0,
										fontSize: '12px',
										color: 'grey',
										opacity: '0.5',
									}}
								>
									Description All
								</p>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
export function RecordAndCreate(props) {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<DropzoneComponent style={{ width: '100%', height: '100%' }} />
		</div>
	);
}
export function Templates(props) {
	return <div>Templates</div>;
}
export function MusicAndSFX(props) {
	return <div>Music And SFX</div>;
}
export function StockVideo(props) {
	return <div>Stock Video</div>;
}
export function StockImages(props) {
	return <div>Stock Images</div>;
}
export function Text(props) {
	return <div>Text</div>;
}
