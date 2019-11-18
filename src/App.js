import React from 'react'
import './App.css'
import { JSCustomNodeModel } from './custom-node-js/JSCustomNodeModel'
import { JSCustomNodeFactory } from './custom-node-js/JSCustomNodeFactory'
import createEngine, {
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams'

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core'

function App() {
  const engine = createEngine()

  engine.getNodeFactories().registerFactory(new JSCustomNodeFactory())

const node1 = new DefaultNodeModel({
  name: 'Node 1',
  color: 'rgb(0,192,255)',
})
node1.setPosition(100, 100)
let port1 = node1.addOutPort('Out')

// node 2
const node2 = new DefaultNodeModel({
  name: 'Node 2',
  color: 'rgb(0,192,255)',
})
node2.setPosition(100, 100)
let port2 = node2.addOutPort('Out')

const ports = [
  { text: "Play", color: "#27AE60", isIn: true },
  { text: "Move On", color: "#27AE60", isIn: true },
  { text: "Stop", color: "#27AE60", isIn: true },
  { text: "Delay", color: "#9B51E0", isIn: true },
  { text: "Offset", color: "#9B51E0", isIn: true },
  { text: "Amplitude", color: "#9B51E0", isIn: true },
  { text: "Pitch", color: "#9B51E0", isIn: true },
  { text: "Space", color: "#2D9CDB", isIn: true },
  { text: "Space", color: "#F2994A", isIn: true },
]

const node3 = new JSCustomNodeModel({ color: 'rgb(192,255,0)', ports });
node3.setPosition(500, 300);

const link = port1.link(port2)
link.addLabel('Hello World!')

const model = new DiagramModel()
model.addAll(node1, node2, node3, link)
engine.setModel(model)

return (
    <CanvasWidget className="srd-demo-canvas" engine={engine} />
  )
}

export default App
