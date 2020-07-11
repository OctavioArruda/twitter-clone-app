import React from 'react';

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
            <h2>@Schifer1_</h2>

            <p>
                Lorem ipsum dolor sit amet <a href="https://rocketseat.com.br">@Rocketseat</a>.
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

            <FollowAge>
                <span>
                    seguindo <strong>157</strong>
                </span>
                <span>
                    <strong>172 </strong> seguidores
                </span>
            </FollowAge>
        </ProfileData>
    </Container>
  );
}

export default ProfilePage;