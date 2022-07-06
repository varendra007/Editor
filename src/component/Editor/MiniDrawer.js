import * as React from 'react';
import Slide from '@mui/material/Slide';
// import { makeStyles } from '@mui/styles';
import dimensions from './editorDimensionsConstants';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import { TextFieldsOutlined, WindowOutlined } from '@mui/icons-material';
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
			{props.icon}

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
				title="Create & Upload"
				active={props.currentIndex === 1}
				icon={<CameraOutlinedIcon style={{ color: '#b3b3b6' }} />}
				// imgSrc="./images/your_media.svg"
				onClick={props.handleRecordAndCreate}
			/>
			<DrawerButtons
				title="Media"
				active={props.currentIndex === 0}
				// imgSrc="./images/your_media.svg"
				icon={<FolderOpenOutlinedIcon style={{ color: '#b3b3b6' }} />}
				onClick={props.handleYourMedia}
				size="25px"
			/>

			<DrawerButtons
				title="Music & SFX"
				active={props.currentIndex === 3}
				icon={<MusicVideoOutlinedIcon style={{ color: '#b3b3b6' }} />}
				onClick={props.handleMusicAndSFX}
			/>
			<DrawerButtons
				title="Images"
				active={props.currentIndex === 4}
				icon={<ImageSearchOutlinedIcon style={{ color: '#b3b3b6' }} />}
				onClick={props.handleStockImages}
			/>
			{/* <DrawerButtons
				title="Stock Videos"
				active={props.currentIndex === 5}
				imgSrc="./images/your_media.svg"
				onClick={props.handleStockVideos}
			/> */}
			<DrawerButtons
				title="Text"
				active={props.currentIndex === 6}
				icon={<TextFieldsOutlined style={{ color: '#b3b3b6' }} />}
				onClick={props.handleText}
			/>
			<DrawerButtons
				title="Templates"
				active={props.currentIndex === 2}
				icon={<WindowOutlined style={{ color: '#b3b3b6' }} />}
				onClick={props.handleTemplates}
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
