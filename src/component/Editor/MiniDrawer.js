import * as React from 'react';
import Slide from '@mui/material/Slide';
import { makeStyles } from '@mui/styles';
import dimensions from './editorDimensionsConstants';
const useStyles = makeStyles({
	mini: {
		width: `${dimensions.drawerComponentWidth}px`,
		height: '100vh',
		background: '#212425',
		borderRight: '2px solid grey',
		color: 'white',
	},
});

export function TransitionLeft(props) {
	return (
		<Slide
			{...props}
			direction="right"
			style={{ margin: '0' }}
			timeout={{ enter: 820, exit: 500 }}
		></Slide>
	);
}

const DrawerButtons = (props) => {
	return (
		<div
			style={{
				padding: '13px 0',
				cursor: 'pointer',
				background: props.active ? '#272731' : '',
			}}
			onClick={props.onClick}
		>
			<img
				src={props.imgSrc}
				alt="menu"
				style={{
					cursor: 'pointer',
					width: props.size ? props.size : '20px',
					height: 'auto',
				}}
			/>
			<p
				style={{
					color: 'grey',
					fontSize: '13px',
					fontWeight: '500',
					textAlign: 'center',
					margin: '5px 0',
				}}
			>
				{props.title}
			</p>
		</div>
	);
};

const MiniDrawer = (props) => {
	return (
		<div
			style={{
				background: '#16161e',
				position: 'absolute',
				width: `${dimensions.miniDrawerWidth}px`,
				height: '100vh',
				left: 0,
				zIndex: '+10000000000',
				overflow: 'auto',
				borderRight: '1px solid grey',
			}}
			id="mini-drawer"
		>
			<div style={{ margin: '20px 0 10px' }}>
				<img
					src="./images/menu_btn.svg"
					alt="menu"
					style={{ cursor: 'pointer' }}
					onClick={props.onClick}
				/>
			</div>
			<DrawerButtons
				title="Your Media"
				active={props.currentIndex === 0}
				imgSrc="./images/your_media.svg"
				onClick={props.handleYourMedia}
				size="25px"
			/>
			<DrawerButtons
				title="Record & Create"
				active={props.currentIndex === 1}
				imgSrc="./images/your_media.svg"
				onClick={props.handleRecordAndCreate}
			/>
			<DrawerButtons
				title="Templates"
				active={props.currentIndex === 2}
				imgSrc="./images/your_media.svg"
				onClick={props.handleTemplates}
			/>
			<DrawerButtons
				title="Music & SFX"
				active={props.currentIndex === 3}
				imgSrc="./images/music.svg"
				onClick={props.handleMusicAndSFX}
			/>
			<DrawerButtons
				title="Stock Images"
				active={props.currentIndex === 4}
				imgSrc="./images/stock_images.svg"
				onClick={props.handleStockImages}
			/>
			<DrawerButtons
				title="Stock Videos"
				active={props.currentIndex === 5}
				imgSrc="./images/your_media.svg"
				onClick={props.handleStockVideos}
			/>
			<DrawerButtons
				title="Text"
				active={props.currentIndex === 6}
				imgSrc="./images/text.svg"
				onClick={props.handleText}
			/>
			{/* <div style={{ margin: '20px 0 10px' }}>
				<img
					src="./images/menu_btn.svg"
					alt="menu"
					style={{ cursor: 'pointer' }}
					onClick={props.handleDoc}
				/>
			</div>
			<div style={{ margin: '20px 0 10px' }}>
				<img
					src="./images/menu_btn.svg"
					alt="menu"
					style={{ cursor: 'pointer' }}
					onClick={props.handleFile}
				/>
			</div> */}
		</div>
	);
};
export default MiniDrawer;
