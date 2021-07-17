import { AxiosResponse } from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import api from '../services/api';

// import { Container } from './styles';
interface Task  {
    name: string;
    description: string;
    statusId: number;
    projectId: string
    id:string;
}

interface Project  {
    name: string;
    projectTasks: Array<Task>
}

const Card: React.FC = () => {
    const [projects, setprojects] = useState<[Project]>();

    useEffect(() => {
        api.get(`Project`).then((response: AxiosResponse) => {
            setprojects(response.data);
        });
      }, []);

  return (
      <div className="teste">
            {projects?.map(repo => (
                <div className="xxxx">
                    <h1>Projeddto: {repo.name}</h1>
                    {repo.projectTasks.map(task => (
                <div className="xxxx">
                    <h1>task: {task.name}</h1>
                    
                </div>
            ))}
                </div>
            ))}
       </div>
  );
}

export default Card;