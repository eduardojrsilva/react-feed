import { Input } from '../../../components/Input/styles';

import { User } from '../../../model/User';

import { ButtonsContainer, EditInfo, LabelInputWrapper, NameRoleWrapper } from './styles';

interface EditUserInfoProps {
  user: User;
  handleEditMode: () => void;
}

const EditUserInfo: React.FC<EditUserInfoProps> = ({ user, handleEditMode }) => {
  return (
    <EditInfo>
      <NameRoleWrapper>
        <LabelInputWrapper>
          <label htmlFor="name">Nome: </label>
          <Input type="text" id="name" value={user.name} placeholder="Nome" />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <label htmlFor="role">Cargo: </label>
          <Input type="text" id="role" value={user.role} placeholder="Cargo" />
        </LabelInputWrapper>
      </NameRoleWrapper>

      <LabelInputWrapper $column>
        <label htmlFor="avatarUrl">Avatar URL: </label>
        <Input type="text" id="avatarUrl" value={user.avatarUrl} placeholder="Avatar URL" />
      </LabelInputWrapper>

      <LabelInputWrapper $column>
        <label htmlFor="wallpaperUrl">Wallpaper URL: </label>
        <Input
          type="text"
          id="wallpaperUrl"
          value={user.wallpaperUrl}
          placeholder="Wallpaper URL"
        />
      </LabelInputWrapper>

      <LabelInputWrapper $column>
        <label htmlFor="hdwallpaperUrl">High definition wallpaper URL: </label>
        <Input
          type="text"
          id="hdwallpaperUrl"
          value={user.HighDefinitionWallpaperUrl}
          placeholder="High definition wallpaper URL"
        />
      </LabelInputWrapper>

      <ButtonsContainer>
        <button type="button" onClick={handleEditMode}>
          Cancelar
        </button>
        <button type="button">Salvar</button>
      </ButtonsContainer>
    </EditInfo>
  );
};

export default EditUserInfo;
