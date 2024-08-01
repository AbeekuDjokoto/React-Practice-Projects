import { toast } from "react-toastify";

function useToastify() {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  function successToast(msg, options = {}) {
    toast.success(msg, { ...toastOptions, ...options });
  }

  function errorToast(msg, options = {}) {
    toast.error(msg, { ...toastOptions, ...options });
  }

  function infoToast(msg, options = {}) {
    toast.info(msg, { ...toastOptions, ...options });
  }

  return { successToast, errorToast, infoToast };
}

export { useToastify };
