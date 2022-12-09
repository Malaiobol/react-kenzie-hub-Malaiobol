import { StyledModal } from "./style";
import { ModalForm } from "./ModalForm";

export const Modal = ({ setNeed }) => {
  return (
    <StyledModal>
      <span>
        <h4>Cadastrar tecnologia</h4>
        <button
          onClick={() => {
            setNeed(false);
          }}>
          X
        </button>
      </span>
      <ModalForm setNeed={setNeed} />
    </StyledModal>
  );
};
