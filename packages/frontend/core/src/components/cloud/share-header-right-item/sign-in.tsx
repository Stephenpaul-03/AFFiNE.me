import { Button } from '@affine/component/ui/button';
import { GlobalDialogService } from '@affine/core/modules/dialogs';
import { FeatureFlagService } from '@affine/core/modules/feature-flag';
import { useI18n } from '@affine/i18n';
import { useLiveData, useService } from '@toeverything/infra';
import { useCallback } from 'react';

import * as styles from './styles.css';

export const SignIn = () => {
  const globalDialogService = useService(GlobalDialogService);
  const hideCloudSurfaces = useLiveData(
    useService(FeatureFlagService).flags.hide_cloud_surfaces.$
  );

  const t = useI18n();

  const onClickSignIn = useCallback(() => {
    globalDialogService.open('sign-in', {});
  }, [globalDialogService]);

  if (hideCloudSurfaces) return null;

  return (
    <Button
      className={styles.editButton}
      onClick={onClickSignIn}
      data-testid="share-page-sign-in-button"
    >
      {t['com.affine.share-page.header.login']()}
    </Button>
  );
};
