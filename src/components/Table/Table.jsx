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
  }),
  columnHelper.accessor("description", {
    header: "Description",
  }),
  columnHelper.accessor("category", {
    header: "Category",
  }),
  columnHelper.accessor("price", {
    header: "Price",
  }),
  columnHelper.accessor("discountPercentage", {
    header: "Discount Percentage",
  }),
  columnHelper.accessor("rating", {
    header: "Rating",
  }),
  columnHelper.accessor("stock", {
    header: "Stock",
  }),
  columnHelper.accessor("tags", {
    header: "Tags",
  }),
  columnHelper.accessor("brand", {
    header: "Brand",
  }),
  columnHelper.accessor("sku", {
    header: "Sku",
  }),
  columnHelper.accessor("weight", {
    header: "Weight",
  }),
  columnHelper.accessor(
    (row) => {
      const { width, height, depth } = row.dimensions;
      return `weight: ${width}, height: ${height}, depth: ${depth}`;
    },
    {
      header: "Dimension",
    }
  ),
  columnHelper.accessor("warrantyInformation", {
    header: "Warranty Information",
  }),
  columnHelper.accessor("shippingInformation", {
    header: "shipping Information",
  }),
  columnHelper.accessor("returnPolicy", {
    header: "Return Policy",
  }),
];

export const Table = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full overflow-y-auto">
      <table className="w-full border-collapse">
        <thead className="text-left">
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
              <tr key={row.id}>
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
};
