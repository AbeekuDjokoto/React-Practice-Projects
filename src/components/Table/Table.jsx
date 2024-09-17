import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import PropTypes from "prop-types";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("title", {
    id: "id",
    header: "Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("category", {
    header: "Category",
  }),
  columnHelper.accessor("price", {
    header: "Price",
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
  }),
  columnHelper.accessor("tags", {
    header: "Tags",
  }),
  columnHelper.accessor("weight", {
    header: "Weight",
  }),
  columnHelper.accessor("warrantyInformation", {
    header: "Warranty Information",
  }),
];

export const Table = ({ data, tableRowHandler }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full overflow-y-auto">
      <table className="w-full border-collapse">
        <thead className="text-left text-[#6E6893] border border-[#6E6893] bg-[#F4F2FF] whitespace-nowrap">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      style={{ paddingBlock: "8px", paddingInline: "16px" }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="border border-[#6E6893] cursor-pointer"
                onClick={() => tableRowHandler(row.original)}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      style={{ paddingBlock: "8px", paddingInline: "16px" }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  tableRowHandler: PropTypes.func,
};
