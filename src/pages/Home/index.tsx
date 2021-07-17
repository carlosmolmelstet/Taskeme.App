import React, { useState, useCallback } from 'react';
import { Container } from './styles';

interface Usuario {
    name: string;
}


const Home: React.FC = () => {
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    
        
    const handleChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setUsuario({
                ...usuario,
                [e.currentTarget.name]: e.currentTarget.value,
            });
        },
        [usuario]
    );
    
    
    
    
    const userName = usuario.name;
  
  return (
      <Container>
          <h1>testee</h1>
      </Container>
      
  );
}

export default Home;
