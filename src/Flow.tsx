import { useState, useCallback } from 'react';

import ReactFlow, 
{ 
    Background, Controls, 
    Node, Edge, 
    applyNodeChanges, applyEdgeChanges, NodeChange, EdgeChange, 
    addEdge, 
    Connection
} from 'reactflow'
import 'reactflow/dist/style.css';

const initialNodes: Node[] =
[
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: "Hello" },

        type: "input"
    },

    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: "World" }  
    },

    {
        id: '3',
        position: { x: 300, y: 50 },
        data: { label: "How are you?" }  
    }
]

const initialEdges: Edge[] = 
[
    { id: "1-2", source: '1', target: '2', label: 'to the', type: 'step' }
];


const Flow = () => 
{
    const [nodes, setNodes] = useState<Node[]>(initialNodes);

    const [edges, setEdges] = useState<Edge[]>(initialEdges)

    const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);

    const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), [])

    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [])

    return (
        <div className='h-[25rem] w-[50rem] border-2'>
            <ReactFlow 
                nodes={nodes} 
                edges={edges}

                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}

                onConnect={onConnect}
                fitView
            >
                <Background />

                <Controls />
            </ReactFlow>
        </div>
    )
}

export default Flow