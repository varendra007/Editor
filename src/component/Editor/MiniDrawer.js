import * as React from 'react';
import Slide from '@mui/material/Slide';
import dimensions from './editorDimensionsConstants';

let curIndex = 0;

export function TransitionLeft(props) {
	return (
		<Slide
			{...props}
			direction="right"
			style={{ margin: '0' }}
			timeout={{ enter: 820, exit: 500 }}
		>
			<div
				style={{
					width: `${dimensions.drawerComponentWidth}px`,
					height: '100vh',
					background: '#212425',
					borderRight: '2px solid grey',
					color: 'white',
				}}
				// id="drawer-component"
			></div>
		</Slide>
	);
}

const MiniDrawer = (props) => {
	const [activeIndex, setActiveIndex] = React.useState(0);
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
			<p
				onClick={() => {
					setActiveIndex(1);
					curIndex = activeIndex;
				}}
				style={{ color: 'white' }}
			>
				dfkj
			</p>
		</div>
	);
};
export default MiniDrawer;
