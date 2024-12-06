import { useForm } from "react-hook-form";

import ReactModal from "react-modal";
import { useState } from "react";
import { Input } from "../../components/input/input";
import { editProduct } from "../../components/request/request-product";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 400,
  },
};

export const EditProduct = (props) => {
  const {
    isModalOpen,
    onCloseModal,
    setProducts,
    id,
    initialValues,
    setIsEdit,
  } = props;
  const [errorForm, setErrorForm] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    editProduct({ ...data, id })
      .then(({ data }) => {
        setProducts((prevValue) => [
          ...prevValue.map((product) => {
            if (product.id === id) {
              return { ...data, id };
            } else {
              return product;
            }
          }),
        ]);
        onCloseModal({ status: false, id: null });
      })
      .catch(() => setErrorForm(true));
  };

  console.log(initialValues);
  return (
    <ReactModal isOpen={isModalOpen} style={customStyles}>
      <div style={{ display: "flex", flexDirection: "column", width: "427px", height: "286px" }}>
        <div className="modal__header" style={{ display: "flex", alignItems: "center", borderBottom: "solid 1px #E6E6E6" }}>
          <div className="madal__header-header">Изменить продукт</div>
          <div style={{
            width: "40px", height: "40px", display: "flex", alignItems: "center",
            justifyContent: "center", cursor: 'pointer'
          }}
            onClick={() => {
              onCloseModal({ status: false, id: null });
              setErrorForm(false);
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3904 12.33C13.4248 12.3685 13.4439 12.4184 13.4439 12.47C13.4439 12.5217 13.4248 12.5715 13.3904 12.61L12.6104 13.39C12.5713 13.4273 12.5194 13.4481 12.4654 13.4481C12.4114 13.4481 12.3594 13.4273 12.3204 13.39L7.00038 8.06001L1.67038 13.39C1.65258 13.4094 1.63094 13.4249 1.60684 13.4355C1.58274 13.4461 1.5567 13.4516 1.53038 13.4516C1.50405 13.4516 1.47801 13.4461 1.45391 13.4355C1.42981 13.4249 1.40817 13.4094 1.39038 13.39L0.610376 12.61C0.590977 12.5922 0.575489 12.5706 0.564894 12.5465C0.554299 12.5224 0.548828 12.4963 0.548828 12.47C0.548828 12.4437 0.554299 12.4176 0.564894 12.3935C0.575489 12.3694 0.590977 12.3478 0.610376 12.33L5.94038 7.00001L0.610376 1.67001C0.590977 1.65221 0.575489 1.63058 0.564894 1.60648C0.554299 1.58238 0.548828 1.55634 0.548828 1.53001C0.548828 1.50368 0.554299 1.47764 0.564894 1.45354C0.575489 1.42944 0.590977 1.40781 0.610376 1.39001L1.39038 0.61001C1.40817 0.590611 1.42981 0.575123 1.45391 0.564528C1.47801 0.553933 1.50405 0.548462 1.53038 0.548462C1.5567 0.548462 1.58274 0.553933 1.60684 0.564528C1.63094 0.575123 1.65258 0.590611 1.67038 0.61001L7.00038 5.94001L12.3204 0.61001C12.3594 0.57272 12.4114 0.551914 12.4654 0.551914C12.5194 0.551914 12.5713 0.57272 12.6104 0.61001L13.3904 1.39001C13.4248 1.42851 13.4439 1.47835 13.4439 1.53001C13.4439 1.58167 13.4248 1.63151 13.3904 1.67001L8.06038 7.00001L13.3904 12.33Z" fill="#1A1A1A" />
            </svg>

          </div>
        </div>
        <div className="modal__main">
          {errorForm ? (
            <div>Произошла ощибка изменения</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                register={register}
                name={"title"}

                validate={{ required: true }}
                errors={errors}
                input_type={'text'}

                classNameWrapper={'wrapper__product'}

                classNameInput={'wrapper__product-input'}
                classNameLabel={'wrapper__product-label'}
                label={'Наименование'}
              />
              <Input
                register={register}
                errors={errors}
                name={"price"}
                label={"Цена"}
                validate={{ required: true }}
                input_type={'text'}

                classNameWrapper={'wrapper__product'}

                classNameInput={'wrapper__product-input'}
                classNameLabel={'wrapper__product-label'}

              />
              <button className="modal__main-button">Изменить продукт</button>
            </form>
          )}
        </div>
      </div>
    </ReactModal>
  );
};
