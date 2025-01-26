"use client";

import React, { useState, useEffect } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const [id, setId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(false);
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  return (
    <div>
      {/* <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === "Board" && (
        <Board />
      )} */}
    </div>
  );
};

export default Project;

