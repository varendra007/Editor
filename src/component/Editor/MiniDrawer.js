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
	// const classes = useStyles();
	return (
		<Slide
			{...props}
			direction="right"
			style={{ margin: '0' }}
			timeout={{ enter: 820, exit: 500 }}
		></Slide>
	);
}

const MiniDrawer = (props) => {
	// const classes = useStyles();
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
			<div style={{ margin: '20px 0 10px' }}>
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
			</div>
		</div>
	);
};
export default MiniDrawer;
