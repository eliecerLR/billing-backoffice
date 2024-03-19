import React from 'react';

//components
import { Table, TableBody, TableCell, TableRow } from '@tremor/react';
import { white } from 'tailwindcss/colors';

//icons
import { RiBardFill, RiExpandDiagonalFill } from '@remixicon/react';

//interfaces
interface TemplateObject {
  template: string;
}

interface Props {
  data: TemplateObject[];
}

const TierList = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <div className="flex mt-4 justify-between">
        <div className="flex items-center">
          <span className="ml-3">
            <RiBardFill size={20} color={white} className="text-end" />
          </span>
          <p className="text-xl ml-1">Top Templates</p>
        </div>
        <div className="flex items-center">
          <RiExpandDiagonalFill
            size={20}
            color={white}
            className="text-end mr-4"
          />
        </div>
      </div>
      <Table className="mt-5 px-4">
        <TableBody>
          {data.map((obj, index) => (
            <TableRow key={index}>
              <TableCell
                className={index === data.length - 1 ? '' : 'table-divider'}
              >
                <p className="text-original-bone text-md">{`${index + 1}. ${
                  obj.template
                }`}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TierList;
