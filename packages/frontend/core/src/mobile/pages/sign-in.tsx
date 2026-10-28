// oxlint-disable-next-line no-restricted-imports
import { SignInDisabledModal } from '@affine/core/components/affine/auth/sign-in-disabled';
import { FeatureFlagService } from '@affine/core/modules/feature-flag';
import { useLiveData, useService } from '@toeverything/infra';
import { useNavigate } from 'react-router-dom';

import { MobileSignInPanel } from '../components/sign-in';

export const Component = () => {
  const navigate = useNavigate();
  const hideCloudSurfaces = useLiveData(
    useService(FeatureFlagService).flags.hide_cloud_surfaces.$
  );

  if (hideCloudSurfaces) {
    return (
      <SignInDisabledModal
        onClose={() => {
          Promise.resolve(navigate('/')).catch(console.error);
        }}
      />
    );
  }

  return (
    <MobileSignInPanel
      onClose={() => {
        Promise.resolve(navigate('/')).catch(console.error);
      }}
    />
  );
};
