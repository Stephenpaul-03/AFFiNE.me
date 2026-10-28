import { Modal } from '@affine/component';
import { SignInDisabledModal } from '@affine/core/components/affine/auth/sign-in-disabled';
import { SignInPanel, type SignInStep } from '@affine/core/components/sign-in';
import type { AuthSessionStatus } from '@affine/core/modules/cloud/entities/session';
import type {
  DialogComponentProps,
  GLOBAL_DIALOG_SCHEMA,
} from '@affine/core/modules/dialogs';
import { FeatureFlagService } from '@affine/core/modules/feature-flag';
import { useLiveData, useService } from '@toeverything/infra';
import { useCallback } from 'react';

export const SignInDialog = ({
  close,
  server: initialServerBaseUrl,
  step,
}: DialogComponentProps<GLOBAL_DIALOG_SCHEMA['sign-in']>) => {
  const hideCloudSurfaces = useLiveData(
    useService(FeatureFlagService).flags.hide_cloud_surfaces.$
  );
  const onAuthenticated = useCallback(
    (status: AuthSessionStatus) => {
      if (status === 'authenticated') {
        close();
      }
    },
    [close]
  );
  if (hideCloudSurfaces) {
    return <SignInDisabledModal onClose={close} />;
  }
  return (
    <Modal
      open
      persistent
      onOpenChange={() => close()}
      width={400}
      contentOptions={{
        ['data-testid' as string]: 'auth-modal',
        style: {
          padding: '44px 40px 20px',
          minHeight: 550,
          maxHeight: 650,
        },
      }}
    >
      <SignInPanel
        onSkip={close}
        onAuthenticated={onAuthenticated}
        server={initialServerBaseUrl}
        initStep={step as SignInStep}
      />
    </Modal>
  );
};
