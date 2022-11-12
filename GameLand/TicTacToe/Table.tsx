import * as React from 'react';
import { Dispatch, useMemo } from 'react';
import Tr from './Tr';

interface Props {
  tableData: string[][];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>;
  onClick: () => void;
}
const Table = ({ tableData, dispatch }: Props) => {
  return (
    <table>
      {Array(tableData.length)
        .fill(null)
        .map((tr, i) =>
          useMemo(
            () => (
              <Tr
                key={i}
                dispatch={dispatch}
                rowIndex={i}
                rowData={tableData[i]}
              />
            ),
            [tableData[i]]
          )
        )}
    </table>
  );
};

export default Table;
