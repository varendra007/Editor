import * as React from 'react';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import DropzoneComponent from '../Dropzone';
import editorDimensionsConstants from './editorDimensionsConstants';
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

const SearchBar = ({ placeholder }) => {
	return (
		<div
			style={{
				width: editorDimensionsConstants.drawerComponentWidth,
			}}
		>
			<form
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					margin: '20px 0',
					height: '35px',
					justifyContent: 'space-evenly',
				}}
			>
				<input
					style={{
						width: '60%',
						borderRadius: '6px',
						outline: 'none',
						paddingLeft: '5px',
						paddingRight: '5px',
						background: 'white',
					}}
					placeholder={placeholder}
					s
				/>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						background: 'white',
						border: '1px solid black',
						borderRadius: '2px',
						width: '13%',
						// position: 'absolute',
					}}
				>
					<img
						src="./images/filter_btn.svg"
						alt="filter"
						style={{ transform: 'scale(1.2)' }}
					/>
				</div>
			</form>
		</div>
	);
};
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
		<>
			<DropzoneComponent />
		</>
	);
}
export function Templates(props) {
	return (
		<div style={{ overflow: 'auto' }}>
			<SearchBar placeholder="Search Templates" />
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>
				<Grid item xs={12}>
					<Grid container justifyContent="center" spacing={2}>
						{[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
							<Grid key={value} item>
								<img
									src="./images/Rectangle.png"
									alt="img"
									style={{ width: '230px' }}
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
export function MusicAndSFX(props) {
	return (
		<div>
			<SearchBar placeholder="Search Music" />
		</div>
	);
}
export function StockVideo(props) {
	return <div>Stock Video</div>;
}
export function StockImages(props) {
	return (
		<div>
			<SearchBar placeholder="Search Images" />
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
export function Text(props) {
	return (
		<div>
			<SearchBar placeholder="Search Text" />
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
