import { useEffect } from 'react';
import editorDimensionsConstants from './editorDimensionsConstants';

const BottomDrawer = ({ progressBarPosition }) => {
	useEffect(() => {
		console.log(progressBarPosition);
	}, [progressBarPosition]);
	return (
		<>
			<div
				style={{
					width: '0px',
					height: 'inherit',
					borderLeft: '2px solid #b3b3b6',
					opacity: '0.6',
					position: 'absolute',
					left: `${progressBarPosition}px`,
					transition: 'all 200ms linear 0s',
				}}
			></div>
			<div
				style={{
					background: '#000',
					border: '1px solid rgba(179,179,182,0.5)',
					transition: 'all 200ms linear 0s',
					borderRadius: '4px',
					width: '100%',
					height: '100px',
					overflow: 'hidden',
					// opacity: '0.6',
				}}
			></div>
		</>
	);
};

export default BottomDrawer;
