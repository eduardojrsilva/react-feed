import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from '../../../components/Input/styles';

import { useToast } from '../../../providers/Toast';
import { USERS } from '../../../utils/Mocks';

import { User } from '../../../model/User';

import { ButtonsContainer, EditInfo, LabelInputWrapper, NameRoleWrapper } from './styles';

interface EditUserInfoProps {
  user: User;
  handleEditMode: () => void;
}

const EditUserInfo: React.FC<EditUserInfoProps> = ({ user, handleEditMode }) => {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const [wallpaperUrl, setWallpaperUrl] = useState(user.wallpaperUrl);
  const [hdwallpaperUrl, setHdwallpaperUrl] = useState(user.HighDefinitionWallpaperUrl);

  const { addToast } = useToast();
  const history = useHistory();

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleChangeRole = (event: ChangeEvent<HTMLInputElement>): void => {
    setRole(event.target.value);
  };

  const handleChangeAvatarUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setAvatarUrl(event.target.value);
  };

  const handleChangeWallpaperUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setWallpaperUrl(event.target.value);
  };

  const handleChangeHdwallpaperUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setHdwallpaperUrl(event.target.value);
  };

  const handleSaveChanges = (): void => {
    USERS[USERS.indexOf(user)] = {
      name,
      role,
      avatarUrl,
      wallpaperUrl,
      HighDefinitionWallpaperUrl: hdwallpaperUrl,
    };

    addToast({
      title: 'Sucesso',
      description: 'Seus dados foram alterados com sucesso!',
      type: 'success',
    });

    handleEditMode();
    history.push(`/profile/${name}`);
  };

  return (
    <EditInfo>
      <NameRoleWrapper>
        <LabelInputWrapper>
          <label htmlFor="name">Nome: </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Nome"
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <label htmlFor="role">Cargo: </label>
          <Input
            type="text"
            id="role"
            value={role}
            onChange={handleChangeRole}
            placeholder="Cargo"
          />
        </LabelInputWrapper>
      </NameRoleWrapper>

      <LabelInputWrapper $column>
        <label htmlFor="avatarUrl">Avatar URL: </label>
        <Input
          type="text"
          id="avatarUrl"
          value={avatarUrl}
          onChange={handleChangeAvatarUrl}
          placeholder="Avatar URL"
        />
      </LabelInputWrapper>

      <LabelInputWrapper $column>
        <label htmlFor="wallpaperUrl">Wallpaper URL: </label>
        <Input
          type="text"
          id="wallpaperUrl"
          value={wallpaperUrl}
          onChange={handleChangeWallpaperUrl}
          placeholder="Wallpaper URL"
        />
      </LabelInputWrapper>

      <LabelInputWrapper $column>
        <label htmlFor="hdwallpaperUrl">High definition wallpaper URL: </label>
        <Input
          type="text"
          id="hdwallpaperUrl"
          value={hdwallpaperUrl}
          onChange={handleChangeHdwallpaperUrl}
          placeholder="High definition wallpaper URL"
        />
      </LabelInputWrapper>

      <ButtonsContainer>
        <button type="button" onClick={handleEditMode}>
          Cancelar
        </button>

        <button type="button" onClick={handleSaveChanges}>
          Salvar
        </button>
      </ButtonsContainer>
    </EditInfo>
  );
};

export default EditUserInfo;
