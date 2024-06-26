import css from './DeleteContactModal.module.css';

export default function DeleteContactModal({ handleDelete }) {
  return (
    <>
      <h3 className={css.modalText}>Сonfirm to delete</h3>
      <button onClick={handleDelete} className={css.modalBtn}>
        Сonfirm
      </button>
    </>
  );
}
