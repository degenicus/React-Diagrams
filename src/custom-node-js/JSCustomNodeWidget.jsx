import * as React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

const JSCustomNodeWidget = ({ engine, node }) => {
	const renderPorts = _ => {
		return node.portz.map(portzo => {
			return (
				<div className="port-row">
					<PortWidget engine={engine} port={node.getPort('in')}>
						<div style={{background: portzo.color}} className="circle-port" />
					</PortWidget>
					<p>{portzo.text}</p>
				</div>
			)
		})
	}
	return (
		<div className="custom-node">
			<div className="node-header">
				Sounds Node 1
			</div>
			<div className="node-ports">
				{renderPorts()}
				{/* <div className="port-row">
					<PortWidget engine={engine} port={node.getPort('in')}>
						<div className="circle-port" />
					</PortWidget>
					<p>Play</p>
				</div>
				<div className="port-row">
					<PortWidget engine={engine} port={node.getPort('out')}>
						<div className="circle-port" />
					</PortWidget>
					<p>Move On</p>
				</div>
				{node.getBent()} */}
			</div>
		</div>
	);
}

export default JSCustomNodeWidget