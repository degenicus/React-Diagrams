import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';

/**
 * Example of a custom model using pure javascript
 */
export class JSCustomNodeModel extends NodeModel {
	constructor(options = {}) {
		super({
			...options,
			type: 'js-custom-node'
		});
		this.color = options.color || { options: 'red' };
		this.portz = options.ports || []

		options.ports.forEach(port => {
			this.addPort(
				new DefaultPortModel({
					in: port.isIn,
					name: "in"
				})
			);
		})
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.options.color
		};
	}

	deserialize(ob, engine) {
		super.deserialize(ob, engine);
		this.color = ob.color;
	}
}
