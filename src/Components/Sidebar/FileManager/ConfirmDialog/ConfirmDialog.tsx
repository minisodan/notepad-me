import { StripFileNameFromPath } from "../../../Utils/FileManagement";
import { ConfirmationPopup } from "../../../Widgets/ConfirmationPopup";

const ConfirmDialog = ({
  deletePath,
  onCancel,
  onConfirm,
}: {
  deletePath?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}) => {
  return (
    deletePath && (
      <ConfirmationPopup
        bodyText={`Are you sure you want to delete '${StripFileNameFromPath({
          path: deletePath ?? "",
        })}'?`}
        onCancel={onCancel}
        onConfirm={onConfirm}>
      </ConfirmationPopup>
    )
  );
};

export default ConfirmDialog;
