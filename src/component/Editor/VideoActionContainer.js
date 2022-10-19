import React from 'react';
import { makeStyles } from '@mui/styles';
import FullscreenRounded from '@mui/icons-material/FullscreenRounded';

const useStyles = makeStyles({
	videoActionBtn: {
		transform: 'scale(0.9)',
		transition: 'all 200ms linear 0s',
		padding: '0 10px',
		opacity: '0.6',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1)',
			opacity: '1',
		},
	},
});

const VideoActionBtn = ({ imgSrc, onClick, buttonName }) => {
	const classes = useStyles();
	return (
		<img
			src={imgSrc}
			alt={buttonName}
			className={classes.videoActionBtn}
			onClick={onClick}
		/>
	);
};

const VideoActionContainer = ({
	handleRewind,
	handlePlay,
	handleFastForward,
	handleToggleFullScreen,
}) => {
	const classes = useStyles();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<div></div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: '6px',
				}}
			>
				<VideoActionBtn
					imgSrc="./images/play_prev_btn.svg"
					buttonName="play prev"
				/>
				<VideoActionBtn
					imgSrc="./images/back_5sec_btn.svg"
					buttonName="rewind"
					onClick={handleRewind}
				/>
				<VideoActionBtn
					imgSrc="./images/play_btn.svg"
					buttonName="play"
					onClick={handlePlay}
				/>
				<VideoActionBtn
					imgSrc="./images/forward_5sec_btn.svg"
					buttonName="play"
					onClick={handleFastForward}
				/>
				<VideoActionBtn
					imgSrc="./images/play_next_btn.svg"
					buttonName="play next"
				/>
			</div>
			<div style={{}} onClick={handleToggleFullScreen}>
				<FullscreenRounded className={classes.videoActionBtn} />
			</div>
		</div>
	);
};

export default VideoActionContainer;
