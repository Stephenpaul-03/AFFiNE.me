import { Button, Modal } from '@affine/component';
import { useI18n } from '@affine/i18n';

export const SignInDisabledModal = ({ onClose }: { onClose: () => void }) => {
  const t = useI18n();

  return (
    <Modal
      open
      title={t['com.affine.auth.experimental-sign-in-disabled.title']()}
      onOpenChange={onClose}
      width={420}
    >
      <p>{t['com.affine.auth.experimental-sign-in-disabled.description']()}</p>
      <Button variant="primary" onClick={onClose}>
        {t['com.affine.auth.experimental-sign-in-disabled.close']()}
      </Button>
    </Modal>
  );
};
