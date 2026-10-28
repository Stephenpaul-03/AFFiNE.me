import { MenuItem } from '@affine/component/ui/menu';
import { DefaultServerService } from '@affine/core/modules/cloud';
import { FeatureFlagService } from '@affine/core/modules/feature-flag';
import { ServerFeature } from '@affine/graphql';
import { useI18n } from '@affine/i18n';
import { ImportIcon, PlusIcon } from '@blocksuite/icons/rc';
import { useLiveData, useService } from '@toeverything/infra';

import * as styles from './index.css';

export const AddWorkspace = ({
  onAddWorkspace,
  onNewWorkspace,
}: {
  onAddWorkspace?: () => void;
  onNewWorkspace?: () => void;
}) => {
  const t = useI18n();
  const defaultServerService = useService(DefaultServerService);
  const hideCloudSurfaces = useLiveData(
    useService(FeatureFlagService).flags.hide_cloud_surfaces.$
  );
  const defaultServerConfig = useLiveData(defaultServerService.server.config$);
  const enableLocalWorkspace =
    hideCloudSurfaces ||
    BUILD_CONFIG.isNative ||
    defaultServerConfig.features.includes(ServerFeature.LocalWorkspace);

  return (
    <>
      {BUILD_CONFIG.isElectron && (
        <MenuItem
          block={true}
          prefixIcon={<ImportIcon />}
          prefixIconClassName={styles.prefixIcon}
          onClick={onAddWorkspace}
          data-testid="add-workspace"
          className={styles.ItemContainer}
        >
          <div className={styles.ItemText}>
            {t['com.affine.workspace.local.import']()}
          </div>
        </MenuItem>
      )}
      <MenuItem
        block={true}
        prefixIcon={<PlusIcon />}
        prefixIconClassName={styles.prefixIcon}
        onClick={onNewWorkspace}
        data-testid="new-workspace"
        className={styles.ItemContainer}
      >
        <div className={styles.ItemText}>
          {enableLocalWorkspace
            ? t['com.affine.workspaceList.addWorkspace.create']()
            : t['com.affine.workspaceList.addWorkspace.create-cloud']()}
        </div>
      </MenuItem>
    </>
  );
};
