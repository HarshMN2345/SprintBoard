"use client";

import React, { useState, useEffect } from 'react';
import ProjectHeader from '../ProjectHeader';
import BoardView from '../BoardView/page';
import ListView from '../ListView/page';
import Timeline from '../TimelineView/page';
import TableView from '../TableView/page';


type Props = {
  params: Promise<{ id: string }>;
};

const Project = ({ params }: Props) => {
  const [id, setId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === "Board" && id && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />

      )}
      {activeTab === "List" && id && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
      {activeTab === "Timeline" && id && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
        )}
      {activeTab === "Table" && id && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      
    </div>
  );
};

export default Project;

