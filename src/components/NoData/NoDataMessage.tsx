/* eslint-disable react/display-name */
import { LabelHTMLAttributes, forwardRef } from "react";
import * as S from './styles'

type NoDataProps = LabelHTMLAttributes<HTMLLabelElement> & {
  message?: string;
};

const NoDataMessage = forwardRef<HTMLLabelElement, NoDataProps>(
  ({ message = "NO DATA AVAILABLE", ...props }, ref) => {
    return (
      <S.NoData ref={ref} {...props}>
        {message}
      </S.NoData>
    );
  }
);

export default NoDataMessage;
