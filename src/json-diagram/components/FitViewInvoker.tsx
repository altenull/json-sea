import { memo, useEffect } from 'react';
import { Node, useReactFlow } from 'reactflow';

type Props = {
  seaNodes: Node[];
};

const _FitViewInvoker = ({ seaNodes }: Props) => {
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    reactFlowInstance.fitView();
  }, [reactFlowInstance, seaNodes]);

  return <></>;
};

/**
 * The reason I put this component is that useReactFlow hook can only be callable under `ReactFlow`.
 */
export const FitViewInvoker = memo(_FitViewInvoker);
