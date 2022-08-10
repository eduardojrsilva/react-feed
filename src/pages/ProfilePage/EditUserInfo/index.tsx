import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from '../../../components/Input/styles';

import { useToast } from '../../../providers/Toast';

import { User } from '../../../model/User';

import { ButtonsContainer, EditInfo, LabelInputWrapper, NameRoleWrapper } from './styles';

interface EditUserInfoProps {
  user: User;
  handleEditMode: () => void;
}

const EditUserInfo: React.FC<EditUserInfoProps> = ({ user, handleEditMode }) => {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);
  const [avatar, setAvatar] = useState(user.avatar);
  const [wallpaper, setWallpaper] = useState(user.wallpaper);

  const { addToast } = useToast();
  const history = useHistory();

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleChangeRole = (event: ChangeEvent<HTMLInputElement>): void => {
    setRole(event.target.value);
  };

  const handleChangeAvatar = (event: ChangeEvent<HTMLInputElement>): void => {
    setAvatar(event.target.value);
  };

  const handleChangeWallpaper = (event: ChangeEvent<HTMLInputElement>): void => {
    setWallpaper(event.target.value);
  };

  const handleSaveChanges = (): void => {
    // edit user

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
        <label htmlFor="avatar">Avatar: </label>
        <Input
          type="text"
          id="avatar"
          value={avatar}
          onChange={handleChangeAvatar}
          placeholder="Avatar"
        />
      </LabelInputWrapper>

      <LabelInputWrapper $column>
        <label htmlFor="wallpaper">Wallpaper: </label>
        <Input
          type="text"
          id="wallpaper"
          value={wallpaper}
          onChange={handleChangeWallpaper}
          placeholder="Wallpaper"
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
