import * as Yup from "yup";

export const validation = Yup.object().shape({
  names: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().min(4, "too short").required("Required"),
      })
    )
    .required("Must have friends")
    .min(1, "Name is required"),
  phones: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().min(4, "too short").required("Required"),
      })
    )
    .required("Phones is required")
    .min(1, "Minimum of 1 friends"),
  emails: Yup.array()
    .of(
      Yup.object().shape({
        title: Yup.string().min(4, "too short").required("Required"),
      })
    )
    .required("Email is required")
    .min(1, "Minimum of 1 friends"),
});
