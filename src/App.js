// import logo from './logo.svg';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { makeStyles } from '@mui/styles';
import Slide from '@mui/material/Slide';
import './App.css';
import MiniDrawer, { TransitionLeft } from './component/Editor/MiniDrawer';
import editorDimensionsConstants from './component/Editor/editorDimensionsConstants';
import {
	MusicAndSFX,
	RecordAndCreate,
	StockImages,
	StockVideo,
	Templates,
	Text,
	YourMedia,
} from './component/Editor/MiniDrawerComponent';
import ReactPlayer from 'react-player';
import FullscreenRoundedIcon from '@mui/icons-material/FullscreenRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import screenfull from 'screenfull';
import BottomDrawer from './component/Editor/BottomDrawer';
import { TransitionBottom } from './component/Editor/BottomDrawer';
import { UnfoldLessOutlined, UnfoldMoreOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
	bottomActionBtns: {
		background: 'rgba(28,28,40,0.8)',
		borderRadius: '2px',
		cursor: 'pointer',
		margin: '0 3px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '30px',
		width: '40px',
		transition: 'all 200ms linear 0s',
		transform: 'scale(0.9)',
		'&:hover': {
			background: 'rgba(28,28,40,1)',
			transform: 'scale(1)',
		},
	},
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
	bottomActionBtnImg: {
		transform: 'scale(0.9)',
		transition: 'all 200ms linear 0s',
		opacity: '1',
		'&:hover': {
			transform: 'scale(1)',
			opacity: '1',
		},
	},
	exportBtn: {
		background: 'blueviolet',
		width: '120px',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '10px 40px',
		borderRadius: '30px',
		cursor: 'pointer',
		transform: 'scale(0.9)',
		transition: 'all 200ms linear 0s',
		fontSize: '18px',
		paddingLeft: '10px',
		fontFamily: 'sans-serif',
		'&:hover': {
			transform: 'scale(1)',
			opacity: '0.8',
		},
	},
});
const BottomActionsBtn = ({ imgSrc, buttonName, onClick }) => {
	const classes = useStyles();
	return (
		<div className={classes.bottomActionBtns} onClick={onClick}>
			<img src={imgSrc} alt={buttonName} />
		</div>
	);
};

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

function App() {
	const classes = useStyles();
	const [isLeftDrawerOpen, setIsLeftDrawerOpen] = React.useState(true);
	const [isBottomDrawerOpen, setIsBottomDrawerOpen] = React.useState(true);
	const [transitionLeft, setTransitionLeft] = React.useState(undefined);
	const [transitionBottom, setTransitionBottom] = React.useState(undefined);

	const handleClickLeft = (Transition) => () => {
		if (!isLeftDrawerOpen) {
			setTransitionLeft(() => Transition);
			setIsLeftDrawerOpen(true);
			// leftDrawerOpen = true;
		} else {
			setIsLeftDrawerOpen(false);
			// leftDrawerOpen = false;
		}
	};
	const handleLeftNav = (Transition, curInd) => () => {
		if (!isLeftDrawerOpen) {
			setTransitionLeft(() => Transition);
			setIsLeftDrawerOpen(true);
			// leftDrawerOpen = true;
		}
		setActiveIndex(curInd);
	};
	const handleClickBottomDrawer = (Transition) => () => {
		setTransitionBottom(() => Transition);
		setIsBottomDrawerOpen(true);
	};
	const handleCloseBottomDrawer = () => {
		setIsBottomDrawerOpen(false);
	};
	React.useEffect(() => {
		setTransitionBottom(() => TransitionBottom);
	}, []);

	// !
	const [activeIndex, setActiveIndex] = React.useState(0);

	// ! Dimensions of video
	const [videoDimensions, setVideoDimensions] = React.useState({
		height: 0,
		width: 0,
	});
	React.useEffect(() => {
		setVideoDimensions(() => {
			let height = document.getElementById('video-container').style.height;
			return {
				height,
				width: document.getElementById('react-player').style.width,
			};
		});
	}, [isLeftDrawerOpen, isBottomDrawerOpen]);

	// !VIDEO Video controles functionalities started from here
	const [isPlaying, setIsPlaying] = React.useState(false);
	const [isFullScreen, setIsFullScreen] = React.useState(false);
	const playerRef = React.useRef(null);
	const playerContainerRef = React.useRef(null);
	const handleFastForward = () => {
		playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5);
		// console.log(playerRef.current.getcurrentTime());
		console.log('click');
	};

	const handleRewind = () => {
		playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
		// console.log(playerRef.current.getcurrentTime());
		console.log('click');
	};
	const handlePlay = () => {
		setIsPlaying(!isPlaying);
	};
	const handleToggleFullScreen = () => {
		screenfull.toggle(playerContainerRef.current);
		setIsFullScreen(!isFullScreen);
	};

	const [progress, setProgress] = React.useState(null);
	const [progressTime, setProgressTime] = React.useState('00:00:00');
	React.useEffect(() => {
		// let time = 653.804263;
		// let r = Math.round((time + Number.EPSILON) * 100) / 100;
		// console.log(r);
		// let min = parseInt(time / 60);
		// let sec = parseInt(time - min * 60);
		// let miliSec = time.toString().split('.')[1];
		// console.log('min', min);
		// console.log('sec', sec);
		// console.log(miliSec);
		console.log(progressTime);
	}, [progressTime]);

	const handleProgress = (changedState) => {
		// console.log(progress);
		setProgress(() => changedState);
		// console.log(changedState);
		// let time = changedState.playedSeconds;
		// let min = parseInt(time / 60);
		// let sec = parseInt(time - min * 60);
		// let r = Math.round((time + Number.EPSILON) * 100) / 100;
		// let milisec = r.toString().split('.')[1];
	};
	const format = (seconds) => {
		if (isNaN(seconds)) {
			return `00:00`;
		}
		const date = new Date(seconds * 1000);
		const hh = date.getUTCHours();
		const mm = date.getUTCMinutes();
		const ss = date.getUTCSeconds().toString().padStart(2, '0');
		if (hh) {
			return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
		}
		return `${mm}:${ss}`;
	};

	const currentTime =
		playerRef && playerRef.current
			? playerRef.current.getCurrentTime()
			: '00:00';

	const duration =
		playerRef && playerRef.current ? playerRef.current.getDuration() : '00:00';
	const elapsedTime = format(currentTime);

	const totalDuration = format(duration);
	const [editorWidth, setEditorWidth] = React.useState();
	const [progressBarPosition, setProgressBarPosition] = React.useState(0);

	React.useEffect(() => {
		setEditorWidth(
			document.getElementById('main-editor').style.width.split('p')[0] * 1
		);
	}, [isLeftDrawerOpen]);
	React.useEffect(() => {
		let pos = parseInt((currentTime / duration) * editorWidth);
		if (currentTime === duration) pos = pos - 3;
		setProgressBarPosition(pos);
		// console.log(editorWidth);
	}, [duration, currentTime, editorWidth]);

	return (
		<div className="App">
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					background: '#16161e',
				}}
			>
				{/* Left Part */}
				<div>
					{/* Mini Drawer */}
					<MiniDrawer
						onClick={handleClickLeft(TransitionLeft)}
						handleYourMedia={handleLeftNav(TransitionLeft, 0)}
						handleRecordAndCreate={handleLeftNav(TransitionLeft, 1)}
						handleTemplates={handleLeftNav(TransitionLeft, 2)}
						handleMusicAndSFX={handleLeftNav(TransitionLeft, 3)}
						handleStockImages={handleLeftNav(TransitionLeft, 4)}
						handleStockVideos={handleLeftNav(TransitionLeft, 5)}
						handleText={handleLeftNav(TransitionLeft, 6)}
						currentIndex={activeIndex}
					/>
					{/* DrawerContent */}

					<Snackbar
						open={isLeftDrawerOpen}
						// onClose={handleCloseDrawer}
						TransitionComponent={transitionLeft}
						// message="I love snacks"
						key={transitionLeft ? transitionLeft.name : ''}
						style={{
							position: 'absolute',
							bottom: 0,
							left: `${editorDimensionsConstants.miniDrawerWidth}px`,
						}}
						id="drawer-component"
					>
						<div
							style={{
								width: `${editorDimensionsConstants.drawerComponentWidth}px`,
								height: '100vh',
								background: '#212425',
								borderRight: '2px solid grey',
								color: 'white',
								overflow: 'auto',
								overflowX: 'hidden',
								// scrollbarWidth: 'thin',
							}}
						>
							{activeIndex === 0 && <YourMedia />}
							{activeIndex === 1 && <RecordAndCreate />}
							{activeIndex === 2 && <Templates />}
							{activeIndex === 3 && <MusicAndSFX />}
							{activeIndex === 4 && <StockImages />}
							{activeIndex === 5 && <StockVideo />}
							{activeIndex === 6 && <Text />}
						</div>
					</Snackbar>
				</div>
				{/* Right Part */}
				<div
					style={{
						position: 'absolute',
						background: '#16161e',
						width: `${
							isLeftDrawerOpen
								? window.innerWidth -
								  (editorDimensionsConstants.drawerComponentWidth +
										editorDimensionsConstants.miniDrawerWidth)
								: window.innerWidth - editorDimensionsConstants.miniDrawerWidth
						}px`,
						color: 'white',
						display: 'flex',
						flexDirection: 'column',
						// justifyContent: 'space-between',
						left: isLeftDrawerOpen
							? `${
									editorDimensionsConstants.miniDrawerWidth +
									editorDimensionsConstants.drawerComponentWidth
							  }px`
							: `${editorDimensionsConstants.miniDrawerWidth}px`,
						transition: 'all linear 0.5s',
						height: '100vh',
						maxHeight: '100vh',
						overflow: 'hidden',
						maxWidth: `${
							isLeftDrawerOpen
								? window.innerWidth -
								  (editorDimensionsConstants.drawerComponentWidth +
										editorDimensionsConstants.miniDrawerWidth)
								: window.innerWidth - editorDimensionsConstants.miniDrawerWidth
						}px`,
					}}
					id="main-editor"
				>
					<div
						style={{
							position: 'absolute',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
							width: '100%',
						}}
					>
						<div className={classes.exportBtn}>
							Export
							<ArrowDropDownRoundedIcon fontSize="large" />
						</div>
					</div>
					<div
						style={{
							background: '#16161e',
							width: 'inherit',
							height: `${
								isBottomDrawerOpen
									? window.innerHeight -
									  editorDimensionsConstants.bottomDrawerHeight
									: window.innerHeight
							}px`,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'center',
							transition: 'all linear 0.5s',
						}}
					>
						{/* VIDEO container HIGHLIGHT */}
						<div
							style={{
								background: '',
								// width: '640px',
								// height: isFullScreen ? '100vh' : '400px',
								height: '100%',
								maxHheight: `${
									isBottomDrawerOpen
										? window.innerHeight -
										  editorDimensionsConstants.bottomDrawerHeight -
										  50
										: window.innerHeight - 50
								}px`,
								maxWidth: `${
									isLeftDrawerOpen
										? window.innerWidth -
										  (editorDimensionsConstants.drawerComponentWidth +
												editorDimensionsConstants.miniDrawerWidth +
												40)
										: window.innerWidth -
										  editorDimensionsConstants.miniDrawerWidth -
										  40
								}px`,
								overflow: 'hidden',
								// width: `${videoDimensions.width}px`,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							id="video-container"
						>
							{/* <div id="react-player"> */}
							<div
								ref={playerContainerRef}
								style={{
									width: '640px',
									height: '400px',
								}}
							>
								<ReactPlayer
									ref={playerRef}
									playing={isPlaying}
									controls={false}
									light={false}
									onProgress={handleProgress}
									onDuration={(duration) => {
										console.log(duration);
									}}
									// url="https://youtu.be/Qo8ciQ9tw2o"
									url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
									id="react-player"
									// style={{ width: '100%', height: '100%' }}
									config={{
										file: {
											attributes: {
												crossorigin: 'anonymous',
											},
										},
									}}
									width="100%"
									height="100%"
									// height={isFullScreen ? '100%' : '360px'}
								/>
							</div>
							{/* </div> */}
							{/* VIDEO Action container HIGHLIGHT */}
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
										marginTop: '5px',
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
									<FullscreenRoundedIcon
										// color="#b3b3b6"
										// style={{ opacity: '0.5' }}
										className={classes.videoActionBtn}
									/>
								</div>
							</div>
						</div>
						{/* Footer Action container HIGHLIGHT */}
						<div
							style={{
								background: 'black',
								border: '2px solid grey',
								width: 'inherit',
								display: 'flex',
								height: '40px',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
								// transition: 'all linear 0.5s',
							}}
						>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									marginLeft: '20px	',
								}}
							>
								<BottomActionsBtn
									imgSrc={'./images/undo.svg'}
									buttonName="Undo"
								/>
								<BottomActionsBtn
									imgSrc={'./images/redo.svg'}
									buttonName="Redo"
								/>
								{/* <BottomActionsBtn
									imgSrc={'./images/cut.svg'}
									buttonName="Split"
								/>
								<BottomActionsBtn
									imgSrc={'./images/delete.svg'}
									buttonName="Delete"
								/> */}
								<BottomActionsBtn
									imgSrc={'./images/copy.svg'}
									buttonName="Copy"
								/>
							</div>
							<div
								style={{
									fontFamily: 'monospace',
									fontSize: '15px',
									width: '320px',
									// background: 'red',
									display: 'flex',
									justifyContent: 'flex-start',
								}}
							>
								{/* 00:00:00/00:00:00 */}
								{elapsedTime.toString().split(':')[0].length === 1
									? `0${elapsedTime}`
									: elapsedTime}{' '}
								/ {totalDuration}
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									marginRight: '20px',
								}}
							>
								<BottomActionsBtn
									imgSrc={'./images/plus.svg'}
									buttonName="Open"
									// onClick={handleClickBottomDrawer(TransitionBottom)}
								/>
								<BottomActionsBtn
									imgSrc={'./images/minus.svg'}
									buttonName="Close"
									// onClick={handleCloseBottomDrawer}
								/>
								<div
									className={classes.bottomActionBtns}
									onClick={
										isBottomDrawerOpen
											? handleCloseBottomDrawer
											: handleClickBottomDrawer(TransitionBottom)
									}
								>
									{isBottomDrawerOpen ? (
										<UnfoldLessOutlined />
									) : (
										<UnfoldMoreOutlined />
									)}
								</div>
							</div>
						</div>
					</div>
					<Snackbar
						open={isBottomDrawerOpen}
						TransitionComponent={transitionBottom}
						key={transitionBottom ? transitionBottom.name : ''}
						style={{
							position: 'absolute',
							bottom: 0,
							left: `0`,
							right: '0',
						}}
					>
						<div
							style={{
								width: `${
									isLeftDrawerOpen
										? window.innerWidth -
										  (editorDimensionsConstants.drawerComponentWidth +
												editorDimensionsConstants.miniDrawerWidth)
										: window.innerWidth -
										  editorDimensionsConstants.miniDrawerWidth
								}px`,
								height: `${editorDimensionsConstants.bottomDrawerHeight}px`,
								background: '#16161e',
								borderTop: '2px solid grey',
								color: 'white',
								transition: 'width linear 0.5s',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<BottomDrawer progressBarPosition={progressBarPosition} />
						</div>
					</Snackbar>
				</div>
			</div>
		</div>
	);
}

export default App;
