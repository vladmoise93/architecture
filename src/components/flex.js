import React from 'react';

export default function Flex(props) {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
			{props.children}
		</div>
	);
}
