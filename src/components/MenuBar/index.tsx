import React from 'react';

import Button from '../Button';

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon    
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />
              <MenuButton>
                  <HomeIcon />
                  <span>Página inicial</span>
              </MenuButton>

              <MenuButton>
                  <BellIcon />
                  <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon />
                  <span>Mensagens</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon />
                  <span>Favoritados</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon />
                  <span>Perfil</span>
              </MenuButton>

              <Button>
                  <span>Tweetar</span>
              </Button>
          </Topside>
      </Container>
  );
}

export default MenuBar;