import { MenuItem } from '@affine/core/modules/app-sidebar/views';
import { WorkspaceDialogService } from '@affine/core/modules/dialogs';
import { FeatureFlagService } from '@affine/core/modules/feature-flag';
import { WorkspaceService } from '@affine/core/modules/workspace';
import { useI18n } from '@affine/i18n';
import { CollaborationIcon } from '@blocksuite/icons/rc';
import { useLiveData, useService } from '@toeverything/infra';
import { useCallback } from 'react';

export const InviteMembersButton = () => {
  const workspace = useService(WorkspaceService).workspace;
  const hideCloudSurfaces = useLiveData(
    useService(FeatureFlagService).flags.hide_cloud_surfaces.$
  );

  const isLocal = workspace.flavour === 'local';

  const dialogService = useService(WorkspaceDialogService);
  const onOpenInviteMembersModal = useCallback(() => {
    dialogService.open('setting', {
      activeTab: `workspace:members`,
    });
  }, [dialogService]);

  const t = useI18n();

  if (isLocal || hideCloudSurfaces) {
    return null;
  }

  return (
    <MenuItem
      data-testid="slider-bar-invite-members-button"
      icon={<CollaborationIcon />}
      onClick={onOpenInviteMembersModal}
    >
      {t['Invite Members']()}
    </MenuItem>
  );
};
