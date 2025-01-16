/* eslint-disable react/display-name */
import { type LabelHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

type NoDataProps = LabelHTMLAttributes<HTMLLabelElement> & {
  message?: string;
};

const NoDataMessage = forwardRef<HTMLLabelElement, NoDataProps>(
  ({ message = "No Data Available", ...props }, ref) => {
    return (
      <S.NoData ref={ref} {...props}>
        {message}
      </S.NoData>
    );
  }
);

export default NoDataMessage;
