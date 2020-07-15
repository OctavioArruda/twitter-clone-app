import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar,
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton, } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>
                Editar Perfil
            </EditButton> 
            <h1>Octavio Arruda</h1>
            <h2>@OctavioArruda</h2>

            <p>
                Web developer.
                GitHub: <a href="https://github.com/Schifer">Schifer</a>.
                Linkedin: <a href="https://www.linkedin.com/in/octavio-arruda/">Octavio Arruda</a>.
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Rio Grande do Sul, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 15 de abril de 1996
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>157</strong>
                </span>
                <span>
                    <strong>172 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;