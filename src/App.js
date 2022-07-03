// import logo from './logo.svg';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Button } from '@mui/material';
import Slide from '@mui/material/Slide';
import './App.css';
import MiniDrawer, {
	TransitionLeft,
	// TransitionDoc,
} from './component/Editor/MiniDrawer';
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

const miniDrawerWidth = 60;
const drawerComponentWidth = 300;
const bottomDrawerHeight = 350;
let leftDrawerOpen = false;

function TransitionBottom(props) {
	return (
		<Slide
			{...props}
			direction="up"
			style={{ margin: '0' }}
			timeout={{ enter: 820, exit: 500 }}
		>
			<div
				style={{
					width: `${
						leftDrawerOpen
							? window.innerWidth - (drawerComponentWidth + miniDrawerWidth)
							: window.innerWidth - miniDrawerWidth
					}px`,
					height: `${bottomDrawerHeight}px`,
					background: '#16161e',
					borderTop: '2px solid grey',
					color: 'white',
					transition: 'width linear 0.5s',
					display: 'flex',
				}}
			>
				aldfjaldsf
			</div>
		</Slide>
	);
}

function App() {
	const [isDrawerOpen, setIsOpenDrawer] = React.useState(true);
	const [isBottomDrawerOpen, setIsBottomDrawerOpen] = React.useState(true);
	const [transitionLeft, setTransitionLeft] = React.useState(undefined);
	const [transitionBottom, setTransitionBottom] = React.useState(undefined);

	const handleClickLeft = (Transition) => () => {
		if (!isDrawerOpen) {
			setTransitionLeft(() => Transition);
			setIsOpenDrawer(true);
			leftDrawerOpen = true;
		} else {
			setIsOpenDrawer(false);
			leftDrawerOpen = false;
		}
	};
	const handleLeftNav = (Transition, curInd) => () => {
		if (!isDrawerOpen) {
			setTransitionLeft(() => Transition);
			setIsOpenDrawer(true);
			leftDrawerOpen = true;
		}
		setActiveIndex(curInd);
	};
	const handleClickBottom = (Transition) => () => {
		setTransitionBottom(() => Transition);
		setIsBottomDrawerOpen(true);
	};
	React.useEffect(() => {
		setTransitionBottom(() => TransitionBottom);
	}, []);

	// !
	const [activeIndex, setActiveIndex] = React.useState(0);

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
						open={isDrawerOpen}
						// onClose={handleCloseDrawer}
						TransitionComponent={transitionLeft}
						// message="I love snacks"
						key={transitionLeft ? transitionLeft.name : ''}
						style={{
							position: 'absolute',
							bottom: 0,
							left: `${miniDrawerWidth}px`,
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
							isDrawerOpen
								? window.innerWidth - (drawerComponentWidth + miniDrawerWidth)
								: window.innerWidth - miniDrawerWidth
						}px`,
						color: 'white',
						display: 'flex',
						flexDirection: 'column',
						// justifyContent: 'space-between',
						left: isDrawerOpen
							? `${miniDrawerWidth + drawerComponentWidth}px`
							: `${miniDrawerWidth}px`,
						transition: 'all linear 0.5s',
						height: '100vh',
						maxHeight: '100vh',
						overflow: 'hidden',
					}}
				>
					<div
						style={{
							background: '#16161e',
							width: 'inherit',
							height: `${
								isBottomDrawerOpen
									? window.innerHeight - bottomDrawerHeight
									: window.innerHeight
							}px`,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-end',
							transition: 'all linear 0.5s',
						}}
					>
						<p onClick={handleClickBottom(TransitionBottom)}>Open btm</p>
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
					></Snackbar>
				</div>
			</div>
		</div>
	);
}

export default App;
